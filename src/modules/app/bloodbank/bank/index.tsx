import {Box, Button, Heading, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Linking} from 'react-native';
import api from '../../../../api';
import {icons} from '../../../../assets/icons';
import {width} from '../../../../utils/handy';
import {doOnSubscribe} from '../../../../utils/rxjs-utils';
import {finalize} from 'rxjs/operators';
import {BloodBankType} from '../../../../../typings/dataTypes';
const BankScreen = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [banklist, setbanklist] = useState<Array<BloodBankType>>([]);

  useEffect(() => {
    nearestBloodBank();
  }, []);
  const nearestBloodBank = () => {
    api.bank
      .getBloodBank$()
      .pipe(
        doOnSubscribe(() => setLoading(true)),
        finalize(() => setLoading(false)),
      )
      .subscribe({
        next: banks => {
          console.log('Result', banks);
          setbanklist(banks);
        },
        error: error => {
          console.log(error);
        },
      });
  };
  const renderItem = ({item}: {item: BloodBankType}) => (
    <Box bg="white" marginBottom={2} rounded="md" padding={3}>
      <Box
        flexDirection={'row'}
        alignContent="center"
        justifyContent={'space-between'}>
        <Box>
          <Image source={icons.organ} style={{width: 35, height: 35}} />
        </Box>

        <Box ml={4}>
          <Text fontFamily={'Roboto-Bold'} fontSize={18} lineHeight={18}>
            {item.name}
          </Text>
          <Text fontFamily={'Roboto-Regular'} fontSize={14} maxWidth={220}>
            {item.address}
          </Text>
          <Text fontFamily={'Montserrat-Regular'}>{item.phone_number_1}</Text>
        </Box>

        <Box>
          <Button
            size={'sm'}
            onPress={() => Linking.openURL(`tel:+88${item.phone_number_1}`)}
            _text={{fontFamily: 'Montserrat-Regular'}}>
            CALL
          </Button>
        </Box>
      </Box>
    </Box>
  );
  return (
    <Box bg={'#fafafa'} flex={1}>
      {loading ? (
        <Box flex={1} justifyContent="center" alignItems={'center'}>
          <ActivityIndicator size={'large'} color="green" />
        </Box>
      ) : (
        <Box padding={3} bg="#eff3f6" flex={1}>
          <FlatList
            data={banklist}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={{marginBottom: 30}}
          />
        </Box>
      )}
    </Box>
  );
};

export default BankScreen;

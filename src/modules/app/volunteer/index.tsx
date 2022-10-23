import {Box, Button, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Linking} from 'react-native';
import {VolunteerType} from '../../../../typings/dataTypes';
import api from '../../../api';
import {icons} from '../../../assets/icons';
import {width} from '../../../utils/handy';
import {doOnSubscribe} from '../../../utils/rxjs-utils';
import {finalize} from 'rxjs/operators';
const VolunteerScreen = () => {
  const [loading, setLoading] = useState(false);
  const [helplist, sethelplist] = useState<Array<VolunteerType>>([]);

  useEffect(() => {
    volunteerreq();
  }, []);
  const volunteerreq = () => {
    api.volunteer
      .getVolunteer$()
      .pipe(
        doOnSubscribe(() => setLoading(true)),
        finalize(() => setLoading(false)),
      )
      .subscribe({
        next: helps => {
          console.log('Result', helps);
          sethelplist(helps);
        },
        error: error => {
          console.log(error);
        },
      });
  };
  const renderItem = ({item}: {item: VolunteerType}) => (
    <Box bg="white" marginBottom={2} rounded="md" padding={3}>
      <Box flexDirection={'row'} alignItems="center" justifyContent={'space-between'}>
      <Box  borderRightColor="coolGray.400" borderRightWidth={.5}>
          <Box alignSelf={'center'}>
            <Image source={icons.information} alt="organ" style={{height:40,width:40}} />
          </Box>
        </Box>
        <Box
         >
          <Box >
            <Text fontFamily={'Roboto-Bold'} fontSize={18}>
              {item.name}
            </Text>
            
            <Text fontFamily={'Montserrat-Regular'}>{item.phone_number}</Text>
          </Box>
         
        </Box>
        <Box>
            <Button
              bg={'#bd4c38'}
              onPress={() => Linking.openURL(`tel:+88${item.phone_number}`)}
              _text={{fontFamily: 'Montserrat-Bold',letterSpacing:1}}>
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
            data={helplist}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={{marginBottom: 30}}
          />
        </Box>
      )}
    </Box>
  );
};


export default VolunteerScreen;
import {Box, Button, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Linking} from 'react-native';
import {HelpLineType} from '../../../../typings/dataTypes';
import api from '../../../api';
import {icons} from '../../../assets/icons';
import {width} from '../../../utils/handy';
import {doOnSubscribe} from '../../../utils/rxjs-utils';
import {finalize} from 'rxjs/operators';
const HelpLineScreen = () => {
  const [loading, setLoading] = useState(false);
  const [helplist, sethelplist] = useState<Array<HelpLineType>>([]);

  useEffect(() => {
    helpreq();
  }, []);
  const helpreq = () => {
    api.helpline
      .getHelpLine$()
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
  const renderItem = ({item}: {item: HelpLineType}) => (
    <Box bg="white" marginBottom={2} rounded="md" padding={3}>
      <Box
        flexDirection={'row'}
        alignItems="center"
        justifyContent="space-between">
        <Box borderRightColor="coolGray.400" borderRightWidth={0.5}>
          <Box alignSelf={'center'}>
            <Image source={icons.helpline} style={{height: 60, width: 60}} />
          </Box>
        </Box>
        <Box flexDirection={'row'}>
          <Box >
            <Text fontFamily={'Roboto-Bold'} fontSize={16} lineHeight={16}>
              {item.name}
            </Text>

            <Text fontFamily={'Montserrat-Regular'}>{item.contact_number}</Text>
          </Box>
          
        </Box>
        <Box>
            <Button
              bg={'#ffdbac'}
              onPress={() => Linking.openURL(`tel:${item.contact_number}`)}
              _text={{
                fontFamily: 'Montserrat-Bold',
                letterSpacing: 1,
                color: '#084067',
              }}>
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
export default HelpLineScreen;

import {Box, Button, FlatList, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, Image, Linking} from 'react-native';
import {finalize} from 'rxjs/operators';
import {RequestType} from '../../../../../typings/form-data';
import api from '../../../../api';
import {icons} from '../../../../assets/icons';
import {feedlist} from '../../../../utils/country';
import {width} from '../../../../utils/handy';
import {doOnSubscribe} from '../../../../utils/rxjs-utils';

const FeedListScreen = (props: any) => {
  const [feed, setfeed] = useState<Array<RequestType>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = () => {
    api.request
      .BloodRequestDataFromServer$()
      .pipe(
        doOnSubscribe(() => setLoading(true)),
        finalize(() => setLoading(false)),
      )
      .subscribe({
        next: response => {
          console.log('Result', response);
          setfeed(response)
        },
        error: error => {},
      });
  };
  const renderItem = ({item}: {item: RequestType}) => (
    <Box>  
    <Box bg="white" marginTop={2} roundedTop="md" padding={3}>
      <Box borderBottomColor={'coolGray.200'} borderBottomWidth={1} mb={2}>
        <Box flexDirection={'row'} alignItems="center">
          <Box>
            <Text fontFamily={'Roboto-Bold'} fontSize={22} mr={2}>
              |
            </Text>
          </Box>
          <Box>
            <Text
              maxWidth={220}
              fontFamily={'Montserrat-Regular'}
              fontSize={15}>
              {item.name}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box flexDirection={'row'} alignItems="center">
        <Box width={width / 8} borderColor="coolGray.200" borderWidth={1}>
          <Box alignSelf={'center'}>
            <Text fontFamily={'Montserrat-Bold'} fontSize={15}>
              {item.required_blood_group}
            </Text>
          </Box>
        </Box>
        <Box
          width={(7 * width) / 9}
          flexDirection={'row'}
          alignItems="center"
          justifyContent="space-between">
          <Box ml={4} width={(7 * width) / 12}>
            <Text lineHeight={18} fontFamily={'Montserrat-Bold'} fontSize={18}>
              {item?.hospital_name}
            </Text>
            <Text
              fontFamily={'Montserrat-Regular'}
              fontSize={15}
              lineHeight={16}
              my={1}
              maxWidth={220}>
              {item?.hospital_address}
            </Text>
            
            <Text
              fontFamily={'Montserrat-Regular'}
              fontSize={14}
              color="primary.800"
              maxWidth={220}>
             Amount: {item?.amount_blood} bag
            </Text>
            <Text
              fontFamily={'Montserrat-Regular'}
              fontSize={14}
              underline={true}
              maxWidth={220}>
              {item?.contact_number}
            </Text>
          </Box>
          <Box>
            <Button
              borderTopRightRadius={'full'}
              bg={'coolGray.400'}
              onPress={() => Linking.openURL(`tel:+88${item?.contact_number}`)}
              _text={{fontFamily: 'Montserrat-SemiBold'}}>
              CALL
            </Button>
            <Button
              mt={2}
              bg={'coolGray.400'}
              borderBottomLeftRadius={'full'}
              onPress={() => Alert.alert("Under Developed")}
              _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Map
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box height={.3} bg="primary.800" roundedBottom={'full'} />
    </Box>
  );
  return (
    <Box padding={3} bg="#eff3f6" flex={1}>
      <FlatList
        data={feed}
        renderItem={renderItem}
        keyExtractor={item => item?.contact_number}
        style={{marginBottom: 30}}
      />
    </Box>
  );
};

export default FeedListScreen;

import {
  Avatar,
  Box,
  Button,
  FlatList,
  HStack,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Image, Linking} from 'react-native';
import {finalize} from 'rxjs/operators';
import {RequestType} from '../../../../../typings/form-data';
import api from '../../../../api';
import {icons} from '../../../../assets/icons';
import {feedlist} from '../../../../utils/country';
import {height, width} from '../../../../utils/handy';
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
          setfeed(response);
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

        <HStack space={[2, 3]} justifyContent="space-between">
          <Text
            alignSelf={'center'}
            fontFamily={'Montserrat-Bold'}
            textAlign={'center'}
            borderWidth={1}
            fontSize={15}>
            {item.required_blood_group}
          </Text>
          <VStack>
            <Box ml={4}>
              <Text
                lineHeight={18}
                fontFamily={'Montserrat-Bold'}
                fontSize={18}>
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
          </VStack>
          <Spacer />
          <Box justifyContent={'center'}>
            <Button
              borderTopRightRadius={'full'}
              bg={'coolGray.400'}
              onPress={() => Linking.openURL(`tel:+88${item?.contact_number}`)}
              _text={{fontFamily: 'Montserrat-SemiBold'}}>
              CALL
            </Button>
            {/* <Button
            mt={2}
            bg={'coolGray.400'}
            borderBottomLeftRadius={'full'}
            onPress={() => Alert.alert('Under Developed')}
            _text={{fontFamily: 'Montserrat-SemiBold'}}>
            Map
          </Button> */}
          </Box>
        </HStack>
      </Box>
    </Box>
  );
  return (
    <Box padding={3} bg="#eff3f6" flex={1}>
      <FlatList
        data={feed}
        renderItem={renderItem}
        keyExtractor={item => item?.contact_number}
        ListEmptyComponent={() => (
          <Box
            flex={1}
            height={height / 2}
            justifyContent="center"
            alignItems={'center'}>
            <ActivityIndicator size={'large'} color="green" />
          </Box>
        )}
        style={{marginBottom: 30}}
      />
    </Box>
  );
};

export default FeedListScreen;

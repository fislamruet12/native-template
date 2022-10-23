import {Box, Button, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, Linking} from 'react-native';
import api from '../../../../api';
import {width} from '../../../../utils/handy';
import {doOnSubscribe} from '../../../../utils/rxjs-utils';
import {finalize} from 'rxjs/operators';
import {DonorDetailType} from '../../../../../typings/dataTypes';
import {APP_NAVIGATION} from '../../../../../typings/navigation';
const DonorListItem = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [donorlist, setdonorlist] = useState<Array<DonorDetailType>>([]);

  useEffect(() => {
      getDonorList();
  }, []);
  const getDonorList = () => {
    api.donorList
      .getDonorListDetails$()
      .pipe(
        doOnSubscribe(() => setLoading(true)),
        finalize(() => setLoading(false)),
      )
      .subscribe({
        next: list => {
          console.log('Result', list);
          setdonorlist(list);
        },
        error: error => {
          console.log(error);
        },
      });
  };
  const renderItem = ({item}: {item: DonorDetailType}) => (
    <Box>
      <Box bg="white" roundedTop="md" mt={2} padding={3}>
        <Box flexDirection={'row'} >
          <Box justifyContent={'center'} alignItems="center" >
            <Box
             
              bg="primary.900"
              padding={3}
              rounded="full">
              <Text fontFamily={'Roboto-Bold'} color={'white'}>
                {item.blood_group}
              </Text>
            </Box>
          </Box>
          <Box ml={4}>
            <Box>
              <Box flexDirection={'row'} justifyContent={'space-between'}>
                <Text fontFamily={'Roboto-Bold'} fontSize={18}>
                  {item.name}
                </Text>
                <Text
                  fontSize={10}
                  underline={true}
                  fontFamily={'Montserrat-Regular'}>
                  {item.gender}
                </Text>
              </Box>
              <Text
                my={1}
                lineHeight={16}
                fontFamily={'Roboto-Regular'}
                fontSize={14}
                maxWidth={260}>
                {item.address}
              </Text>
              <Text fontFamily={'Montserrat-Regular'}>{item.phone_number}</Text>
            </Box>
           
          </Box>
        </Box>
        <Box alignItems={'flex-end'}>
              <Box flexDirection={'row'} justifyContent="space-between">
                {/* <Box>
                  <Button
                    size={'xs'}
                    bg={'primary.900'}
                    _text={{fontFamily: 'Montserrat-SemiBold'}}
                    onPress={
                      () => props.navigation.push(APP_NAVIGATION.MAPDIRECTION)
                      // props.navigation.navigate(SEARCHDONOR_NAVIGATION.SEARCHDONORLIST)
                    }>
                    MAP
                  </Button>
                </Box> */}
                <Box>
                  <Button
                    size={'xs'}
                    mx={2}
                    bg={'primary.400'}
                    _text={{fontFamily: 'Montserrat-SemiBold'}}
                    onPress={() =>
                      Linking.openURL(`tel:+88${item.phone_number}`)
                    }>
                    CALL
                  </Button>
                </Box>
                {/* <Box>
                  <Button
                    size={'xs'}
                    bg={'primary.900'}
                    _text={{fontFamily: 'Montserrat-SemiBold'}}
                    onPress={
                      () => Alert.alert('', 'Under Developed')
                      // props.navigation.navigate(SEARCHDONOR_NAVIGATION.SEARCHDONORLIST)
                    }>
                    HISTORY
                  </Button>
                </Box> */}
              </Box>
            </Box>
      </Box>

      <Box height={.3} bg="primary.800" roundedBottom={'full'} />
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
            data={donorlist}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={{marginBottom: 10}}
          />
        </Box>
      )}
    </Box>
  );
};

export default DonorListItem;

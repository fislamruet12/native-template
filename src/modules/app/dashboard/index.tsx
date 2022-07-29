import React, {useState} from 'react';
import {Box, Center, Flex, Pressable, Text, VStack} from 'native-base';
import {Alert, Image, ScrollView} from 'react-native';
import {icons} from '../../../assets/icons';
import {bloodGroup} from '../../../utils/blood';
import {BG, width} from '../../../utils/handy';
import {
  APP_NAVIGATION,
  ROOT_NAVIGATION,
  SEARCHDONOR_NAVIGATION,
} from '../../../../typings/navigation';
import _ from 'lodash';
import ActionButton from 'react-native-circular-action-menu';
import {useSelector} from 'react-redux';
import {RootState} from '../../../state/reducer';
import {LanType, User} from '../../../../typings/structures';
let TNT = 20;
let TH = 200;

const DashBoardScreen = (props: any) => {
  const [heights, setheights] = useState(TNT);
  let lan = useSelector(
    (state: RootState) => state.currentLanguage.lan?.language,
  ) 

 
  
  const user = useSelector(
    (state: RootState) => state.currentUser.user,
  ) as User;
  const privateRoute = () => {
    props.navigation.push(ROOT_NAVIGATION.AUTH);
  };
  const donorList = (routeName: any) => {
    if (user) {
      if (user.name != '') props.navigation.push(routeName);
      else {
        privateRoute();
      }
    } else privateRoute();
  };

  const donorListOnlyBloodGroup = (group: any) => {
    if (user) {
      if (user.name != ''){
        props.navigation.push(
          SEARCHDONOR_NAVIGATION.SEARCHDONORLIST,
          {
            blood_group:group,
            division_id: 0,
            district_id: 0,
            upazila_id: 0,
          },
        );
       
      }
      else {
        privateRoute();
      }
    } else privateRoute();

    setheights(TNT);
  };
  return (
    <Box flex={1} safeAreaTop bg="gray.200" alignItems={'center'}>
      <ScrollView>
        {user ? (
          user?.name != '' ? (
            <Box height={70} px="3" mt="4">
              <Box
                flexDirection={'row'}
                justifyContent="space-between"
                alignItems={'center'}>
                <Box>
                  <Text fontFamily={'Montserrat-Bold'} fontSize={16}>
                    Hello, {user.name}
                  </Text>
                </Box>
                <Box>
                  <Image source={icons.sort} />
                </Box>
              </Box>
              <Box>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"WelCome Back !!":"আপনাকে অভিনন্দন"}</Text>
              </Box>
            </Box>
          ) : null
        ) : null}
        <VStack width={width} px="3" space={2.5} mt="4">
          <Flex direction="row" mb="2.5" _text={{color: 'coolGray.800'}}>
            <Pressable
              onPress={_.debounce(
                () => donorList(APP_NAVIGATION.DONORLIST),
                200,
              )}>
              <Center
                rounded={'xl'}
              //  bg="amber.100"
                size={width / 3 - 10}
                borderColor={BG}
                borderWidth={2}>
                <Box
                  borderColor={BG}
                  borderWidth={2}
                  bg="coolGray.500"
                  p={3}
                  rounded="full">
                  <Image
                    style={{width: 30, height: 30}}
                    source={icons.blooddonor}
                  />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"Donor List":"রক্ত দাতা"}</Text>
              </Center>
            </Pressable>
            <Pressable
              onPress={_.debounce(
                () => donorList(APP_NAVIGATION.SEARCHNDONOR),
                200,
              )}>
              <Center
                mx={1}
                rounded={'xl'}
                size={width / 3 - 10}
                borderColor={BG}
                borderWidth={3}>
                <Box
                  borderColor={BG}
                  borderWidth={2}
                  bg="coolGray.500"
                  p={3}
                  rounded="full">
                  <Image
                    source={icons.searchdonor}
                    style={{width: 35, height: 35}}
                  />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"Search Donor":"রক্তদাতা খুঁজুন"}</Text>
              </Center>
            </Pressable>
            <Pressable onPress={() => Alert.alert('', 'Under Developed')}>
              <Center
                rounded={'xl'}
                size={width / 3 - 10}
                borderColor={BG}
                borderWidth={2}>
                <Box
                  borderColor={BG}
                  borderWidth={2}
                  bg="coolGray.500"
                  p={3}
                  rounded="full">
                  <Image source={icons.donor} style={{width: 30, height: 30}} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"Active Donor":"সক্রিয় রক্তদাতা"}</Text>
              </Center>
            </Pressable>
          </Flex>
          <Flex direction="row" mb="2.5">
            <Pressable
              onPress={_.debounce(
                () =>donorList(APP_NAVIGATION.REQUEST),
                200,
              )}>
              <Center
                rounded={'xl'}
                size={width / 3 - 10}
                borderColor={BG}
                borderWidth={2}>
                <Box
                  borderColor={BG}
                  borderWidth={2}
                  bg="coolGray.500"
                  p={3}
                  rounded="full">
                  <Image source={icons.blood} style={{width: 30, height: 30}} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"Blood Request":"রক্তের অনুরোধ"}</Text>
              </Center>
            </Pressable>

            <Pressable
              onPress={_.debounce(
                () => donorList(APP_NAVIGATION.FEED),
                200,
              )}>
              <Center
                mx={1}
                rounded={'xl'}
                size={width / 3 - 10}
                borderColor={BG}
                borderWidth={3}>
                <Box
                  borderColor={BG}
                  borderWidth={2}
                  bg="coolGray.500"
                  p={3}
                  rounded="full">
                  <Image
                    source={icons.contract}
                    style={{width: 30, height: 30}}
                  />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"Request List":"অনুরোধের তালিকা"}</Text>
              </Center>
            </Pressable>
            <Pressable
              onPress={_.debounce(
                () => donorList(APP_NAVIGATION.BLOODBANK),
                200,
              )}>
              <Center
                rounded={'xl'}
                size={width / 3 - 10}
                borderColor={BG}
                borderWidth={2}>
                <Box
                  borderColor={BG}
                  borderWidth={2}
                  bg="coolGray.500"
                  p={3}
                  rounded="full">
                  <Image source={icons.bank} style={{width: 30, height: 30}} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"Blood Bank":"রক্ত ব্যাংক"}</Text>
              </Center>
            </Pressable>
          </Flex>
        </VStack>

        <VStack
          mt={4}
          justifyContent="center"
          alignItems={'center'}
          width={width}
          height={heights}>
          <ActionButton
            onPress={() => (heights === TNT ? setheights(TH) : setheights(TNT))}
            onOverlayPress={() => setheights(TNT)}
            radius={150}
            btnOutRange="#f444"
            size={80}
            icon={
              <Image
                source={icons.bag}
                style={{width: 50, height: 50, tintColor: 'red'}}
              />
            }
            buttonColor={BG}>
            {bloodGroup.map((value, index) => (
              <ActionButton.item
                onPress={() =>donorListOnlyBloodGroup(value)}
                key={value}>
                <Center
                  rounded="full"
                  size="md"
                  borderColor={BG}
                  borderWidth={2}
                  bg={'red.' + (index + 2) * 100}
                  m={1}
                  mt={4}>
                  <Text color="white" fontFamily={'Montserrat-Bold'}>
                    {value}
                  </Text>
                </Center>
              </ActionButton.item>
            ))}
          </ActionButton>
        </VStack>

        <VStack width={width} px="3" space={2.5} mt="4">
          <Flex direction="row" mb="2.5" _text={{color: 'coolGray.800'}}>
            <Pressable
              onPress={_.debounce(
                () => props.navigation.push(APP_NAVIGATION.HELPLINE),
                200,
              )}>
              <Center
                rounded={'xl'}
                size={width / 3 - 10}
                borderColor={BG}
                borderWidth={2}>
                <Box
                  borderColor={BG}
                  borderWidth={2}
                  bg="coolGray.500"
                  p={3}
                  rounded="full">
                  <Image source={icons.help} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"Help Line":"হেল্প লাইন"}</Text>
              </Center>
            </Pressable>
            <Pressable
              onPress={_.debounce(
                () => props.navigation.push(APP_NAVIGATION.VOLUNTEER),
                200,
              )}>
              <Center
                mx={1}
                rounded={'xl'}
                size={width / 3 - 10}
                borderColor={BG}
                borderWidth={3}>
                <Box
                  borderColor={BG}
                  borderWidth={2}
                  bg="coolGray.500"
                  p={3}
                  rounded="full">
                  <Image
                    source={icons.volunteer}
                    style={{width: 30, height: 30}}
                  />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"Volunteers":"স্বেচ্ছাসেবক"}</Text>
              </Center>
            </Pressable>
            <Pressable
              onPress={_.debounce(
                () => Alert.alert('', 'Under Developed'),
                200,
              )}>
              <Center
                rounded={'xl'}
                size={width / 3 - 10}
                borderColor={BG}
                borderWidth={2}>
                <Box
                  borderColor={BG}
                  borderWidth={2}
                  bg="coolGray.500"
                  p={3}
                  rounded="full">
                  <Image source={icons.update} style={{tintColor: 'red'}} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"Update Donor":"দাতা আপডেট"}</Text>
              </Center>
            </Pressable>
          </Flex>
        </VStack>
      </ScrollView>
    </Box>
  );
};
export default DashBoardScreen;

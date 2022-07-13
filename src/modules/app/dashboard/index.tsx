import React, {useState} from 'react';
import {Box, Center, Flex, Pressable, Text, VStack} from 'native-base';
import {Alert, Image, ScrollView} from 'react-native';
import {icons} from '../../../assets/icons';
import {bloodGroup} from '../../../utils/blood';
import {BG, width} from '../../../utils/handy';
import {APP_NAVIGATION, ROOT_NAVIGATION} from '../../../../typings/navigation';
import _ from 'lodash';
import ActionButton from 'react-native-circular-action-menu';
import {useSelector} from 'react-redux';
import {RootState} from '../../../state/reducer';
import {User} from '../../../../typings/structures';
let TNT = 20;
let TH = 200;

const DashBoardScreen = (props: any) => {
  const [heights, setheights] = useState(TNT);
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

  return (
    <Box flex={1} safeAreaTop bg="gray.300" alignItems={'center'}>
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
                <Text fontFamily={'Montserrat-SemiBold'}>WelCome Back !!</Text>
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
                
                size={width / 3 - 10}
                borderColor="coolGray.100"
                borderWidth={2}>
                <Box bg="coolGray.500" p={3} rounded="full">
                  <Image  style={{width: 40, height: 40}} source={icons.blooddonor} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>Donor List</Text>
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
                borderColor="coolGray.100"
                borderWidth={3}>
                <Box bg="coolGray.500" p={3} rounded="full" >
                  <Image
                    source={icons.searchdonor}
                    style={{width: 45, height: 45}}
                  />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>Search Donor</Text>
              </Center>
            </Pressable>
            <Pressable onPress={() => Alert.alert('', 'Under Developed')}>
              <Center rounded={'xl'} size={width / 3 - 10} borderColor="coolGray.100" borderWidth={2}>
                <Box bg="coolGray.500" p={3} rounded="full">
                  <Image source={icons.donor} style={{width: 45, height: 45}} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>Active Donor</Text>
              </Center>
            </Pressable>
          </Flex>
          <Flex direction="row" mb="2.5">
            <Pressable
              onPress={_.debounce(
                () => Alert.alert('', 'Under Developed'),
                200,
              )}>
              <Center rounded={'xl'} size={width / 3 - 10} borderColor="coolGray.100" borderWidth={2}>
                <Box bg="coolGray.500" p={3} rounded="full">
                  <Image source={icons.blood} style={{width: 30, height: 30}} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>Blood Request</Text>
              </Center>
            </Pressable>

            <Pressable
              onPress={_.debounce(
                () => Alert.alert('', 'Under Developed'),
                200,
              )}>
              <Center
                mx={1}
                rounded={'xl'}
                size={width / 3 - 10}
                borderColor="coolGray.100" borderWidth={3}>
                <Box bg="coolGray.500" p={3} rounded="full">
                  <Image
                    source={icons.contract}
                    style={{width: 30, height: 30}}
                  />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>Request List</Text>
              </Center>
            </Pressable>
            <Pressable
              onPress={_.debounce(
                () => donorList(APP_NAVIGATION.BLOODBANK),
                200,
              )}>
              <Center rounded={'xl'} size={width / 3 - 10} borderColor="coolGray.100" borderWidth={2}>
                <Box bg="coolGray.500" p={3} rounded="full">
                  <Image source={icons.bank} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>Blood Bank</Text>
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
            icon={<Image source={icons.bag} style={{width: 50, height: 50,tintColor:'red'}} />}
            buttonColor={BG}>
            {bloodGroup.map((value, index) => (
              <ActionButton.item
                onPress={() => {
                  setheights(TNT);
                }}
                key={value}>
                <Center
                  rounded="full"
                  size="md"
                  bg={'red.' + (index + 2) * 100}
                  m={1}
                  mt={4}>
                  <Text fontFamily={'Montserrat-Bold'}>{value}</Text>
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
              <Center rounded={'xl'} size={width / 3 - 10} borderColor="coolGray.100" borderWidth={2}>
                <Box bg="coolGray.500" p={3} rounded="full">
                  <Image source={icons.help} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>Help Line</Text>
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
                borderColor="coolGray.100" borderWidth={3}>
                <Box bg="coolGray.500" p={3} rounded="full">
                  <Image
                    source={icons.volunteer}
                    style={{width: 30, height: 30}}
                  />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>Volunteers</Text>
              </Center>
            </Pressable>
            <Pressable
              onPress={_.debounce(
                () => Alert.alert('', 'Under Developed'),
                200,
              )}>
              <Center rounded={'xl'} size={width / 3 - 10} borderColor="coolGray.100" borderWidth={2}>
                <Box bg="coolGray.500" p={3} rounded="full">
                  <Image source={icons.update} style={{tintColor: 'red'}} />
                </Box>
                <Text fontFamily={'Montserrat-SemiBold'}>Update Donor</Text>
              </Center>
            </Pressable>
          </Flex>
        </VStack>
      </ScrollView>
    </Box>
  );
};
export default DashBoardScreen;

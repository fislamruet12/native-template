import React, {useState} from 'react';
import { Box, Center, Flex, Heading, Pressable, Text, VStack} from 'native-base';
import {Alert, Image, ScrollView} from 'react-native';
import {icons} from '../../../assets/icons';
import {bloodGroup} from '../../../utils/blood';
import {width} from '../../../utils/handy';
import {APP_NAVIGATION, ROOT_NAVIGATION} from '../../../../typings/navigation';
import _ from 'lodash';
import ActionButton from 'react-native-circular-action-menu';
import {store} from '../../../state';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducer';
import { User } from '../../../../typings/structures';
let TNT=20
let TH=200
const DashBoardScreen = (props: any) => {
  const [heights, setheights] = useState(TNT);
  const user = useSelector((state:RootState)=>state.currentUser.user) as User
  const privateRoute = () => {
    props.navigation.push(ROOT_NAVIGATION.AUTH);
  };
  const donorList = (routeName: any) => {
    if (user) {
      props.navigation.push(routeName);
    } else privateRoute()
  };
  console.log(user?.accessToken)
  return (
    <Box flex={1} safeAreaTop bg="white" alignItems={'center'}>
      <ScrollView>
        <VStack width={width} px="3" space={2.5} mt="4">
          <Flex direction="row" mb="2.5" _text={{color: 'coolGray.800'}}>
            <Pressable
              onPress={_.debounce(
                () => donorList(APP_NAVIGATION.SEARCHNDONOR),
                200,
              )}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.100">
                <Image source={icons.blooddonor} />
                <Text bold>Donor List</Text>
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
                bg="primary.200">
                <Image
                  source={icons.searchdonor}
                  style={{width: 30, height: 30}}
                />
                <Text bold>Search Donor</Text>
              </Center>
            </Pressable>
            <Pressable onPress={() => console.log('press')}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.300">
                <Image source={icons.donor} style={{width: 30, height: 30}} />
                <Text bold>Active Donor</Text>
              </Center>
            </Pressable>
          </Flex>
          <Flex direction="row" mb="2.5">
          <Pressable onPress={_.debounce(() => donorList('12'), 200)}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.100">
                <Image source={icons.blood} style={{width: 30, height: 30}} />
                <Text bold>Blood Request</Text>
              </Center>
            </Pressable>
            
            <Pressable
             onPress={() => console.log('press')}>
              <Center
                mx={1}
                rounded={'xl'}
                size={width / 3 - 10}
                bg="primary.200">
                <Image source={icons.contract} style={{width: 30, height: 30}} />
                <Text bold>Request List</Text>
              </Center>
            </Pressable>
            <Pressable  onPress={_.debounce(
                () => donorList(APP_NAVIGATION.BLOODBANK),
                200,
              )}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.300">
                <Image source={icons.bank} />
                <Text bold>Blood Bank</Text>
              </Center>
            </Pressable>
          </Flex>
        </VStack>

        <VStack mt={4}  justifyContent="center" alignItems={'center'} width={width} height={heights}>
        
          <ActionButton
            onPress={() => (heights === TNT ? setheights(TH) : setheights(TNT))}
            onOverlayPress={() => setheights(TNT)}
            radius={150}
            btnOutRange="#f444"
            size={80}
            icon={<Image source={icons.bag} style={{width:50,height:50}}/>}
            buttonColor="rgba(227,136,25,1)">
            {bloodGroup.map((value,index) => (
              <ActionButton.item
                onPress={() => {
                  setheights(TNT);
                }}
                key={value}>
                <Center rounded="full" size="md" bg={"red."+(index+2)*100} m={1} mt={4}>
                  <Text bold>{value}</Text>
                </Center>
              </ActionButton.item>
            ))}
          </ActionButton>
        </VStack>
       
        <VStack width={width} px="3" space={2.5} mt="4">
          <Flex direction="row" mb="2.5" _text={{color: 'coolGray.800'}}>
            <Pressable
              onPress={_.debounce(
                () => donorList(APP_NAVIGATION.SEARCHNDONOR),
                200,
              )}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.100">
                <Image source={icons.help} />
                <Text bold>Help Line</Text>
              </Center>
            </Pressable>
            <Pressable
              onPress={_.debounce(
                () => donorList(APP_NAVIGATION.BLOODBANK),
                200,
              )}>
              <Center
                mx={1}
                rounded={'xl'}
                size={width / 3 - 10}
                bg="primary.200">
                <Image source={icons.volunteer} style={{width: 30, height: 30}} />
                <Text bold>Volunteers</Text>
              </Center>
            </Pressable>
            <Pressable onPress={() => console.log('press')}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.300">
                <Image source={icons.update} style={{tintColor: 'red'}} />
                <Text bold>Update Donor</Text>
              </Center>
            </Pressable>
            </Flex>
            </VStack>
      </ScrollView>
    </Box>
  );
};
export default DashBoardScreen;

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

  return (
    <Box flex={1} safeAreaTop bg="white" alignItems={'center'}>
      
      <ScrollView>
        <VStack width={width} px="3" space={2.5} mt="4">
          <Flex direction="row" mb="2.5" _text={{color: 'coolGray.800'}}>
            <Pressable
              onPress={_.debounce(
                () => donorList(APP_NAVIGATION.DONORLIST),
                200,
              )}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.100">
                 <Box bg="coolGray.500" p={2} 
                 <Image source={icons.blooddonor}/>
                 </Box>
                <Text fontFamily={"Montserrat-SemiBold"}>Donor List</Text>
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
                <Text fontFamily={"Montserrat-SemiBold"}>Search Donor</Text>
              </Center>
            </Pressable>
            <Pressable onPress={() =>   Alert.alert("",'Under Developed')}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.300">
                <Image source={icons.donor} style={{width: 30, height: 30}} />
                <Text fontFamily={"Montserrat-SemiBold"}>Active Donor</Text>
              </Center>
            </Pressable>
          </Flex>
          <Flex direction="row" mb="2.5">
          <Pressable onPress={_.debounce(() =>Alert.alert("",'Under Developed'), 200)}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.100">
                <Image source={icons.blood} style={{width: 30, height: 30}} />
                <Text fontFamily={"Montserrat-SemiBold"}>Blood Request</Text>
              </Center>
            </Pressable>
            
            <Pressable
            onPress={_.debounce(() =>Alert.alert("",'Under Developed'), 200)}>
              <Center
                mx={1}
                rounded={'xl'}
                size={width / 3 - 10}
                bg="primary.200">
                <Image source={icons.contract} style={{width: 30, height: 30}} />
                <Text fontFamily={"Montserrat-SemiBold"}>Request List</Text>
              </Center>
            </Pressable>
            <Pressable  onPress={_.debounce(
                () => donorList(APP_NAVIGATION.BLOODBANK),
                200,
              )}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.300">
                <Image source={icons.bank} />
                <Text fontFamily={"Montserrat-SemiBold"}>Blood Bank</Text>
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
                  <Text fontFamily={"Montserrat-Bold"}>{value}</Text>
                </Center>
              </ActionButton.item>
            ))}
          </ActionButton>
        </VStack>
       
        <VStack width={width} px="3" space={2.5} mt="4">
          <Flex direction="row" mb="2.5" _text={{color: 'coolGray.800'}}>
            <Pressable
             onPress={_.debounce(() =>Alert.alert("",'Under Developed'), 200)}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.100">
                <Image source={icons.help} />
                <Text fontFamily={"Montserrat-SemiBold"}>Help Line</Text>
              </Center>
            </Pressable>
            <Pressable
             onPress={_.debounce(() =>Alert.alert("",'Under Developed'), 200)}>
              <Center
                mx={1}
                rounded={'xl'}
                size={width / 3 - 10}
                bg="primary.200">
                <Image source={icons.volunteer} style={{width: 30, height: 30}} />
                <Text fontFamily={"Montserrat-SemiBold"}>Volunteers</Text>
              </Center>
            </Pressable>
            <Pressable onPress={_.debounce(() =>Alert.alert("",'Under Developed'), 200)}>
              <Center rounded={'xl'} size={width / 3 - 10} bg="primary.300">
                <Image source={icons.update} style={{tintColor: 'red'}} />
                <Text fontFamily={"Montserrat-SemiBold"}>Update Donor</Text>
              </Center>
            </Pressable>
            </Flex>
            </VStack>
      </ScrollView>
    </Box>
  );
};
export default DashBoardScreen;

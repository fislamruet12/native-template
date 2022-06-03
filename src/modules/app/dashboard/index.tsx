import React from 'react';
import {Box, Center, Flex, Heading, Pressable, Text, VStack} from 'native-base';
import {Image, ScrollView} from 'react-native';
import {icons} from '../../../assets/icons';
import {bloodGroup} from '../../../utils/blood';
import { width } from '../../../utils/handy';
import { AUTH_NAVIGATION, ROOT_NAVIGATION } from '../../../../typings/navigation';

const DashBoardScreen = (props:any) => {
    const privateRoute=()=>{
     props.navigation.push(ROOT_NAVIGATION.AUTH)

    }
    const donorList=()=>{
        privateRoute()
    }
  return (
    <Box flex={1} safeAreaTop bg='white' alignItems={'center'}>
      <ScrollView>
        <VStack width="100%" px="3" space={2.5} mt="4">
          <Flex direction="row" mb="2.5" _text={{color: 'coolGray.800'}}>
            <Pressable onPress={() => donorList()}>
              <Center rounded={'xl'} size="xl" bg="primary.100">
                <Image source={icons.blooddonor} />
                <Text bold>Donor List</Text>
              </Center>
            </Pressable>
            <Pressable onPress={() => console.log('press')}>
              <Center mx={1} rounded={'xl'} size="xl" bg="primary.200">
                <Image source={icons.searchdonor} style={{width: 30, height: 30}} />
                <Text bold>Search Donor</Text>
              </Center>
            </Pressable>
            <Pressable onPress={() => console.log('press')}>
              <Center rounded={'xl'} size="xl" bg="primary.300">
                <Image source={icons.blood} style={{width: 30, height: 30}} />
                <Text bold>Blood Request</Text>
              </Center>
            </Pressable>
          </Flex>
          <Flex direction="row" mb="2.5">
            <Pressable onPress={() => console.log('press')}>
              <Center rounded={'xl'} size="xl" bg="primary.100">
                <Image source={icons.donor} style={{width: 30, height: 30}} />
                <Text bold>Active Donor</Text>
              </Center>
            </Pressable>
            <Pressable onPress={() => console.log('press')}>
              <Center mx={1} rounded={'xl'} size="xl" bg="primary.200">
                <Image source={icons.bank} style={{width: 30, height: 30}} />
                <Text bold>Blood Bank</Text>
              </Center>
            </Pressable>
            <Pressable onPress={() => console.log('press')}>
              <Center rounded={'xl'} size="xl" bg="primary.300">
                <Image source={icons.update} style={{tintColor:'red'}} />
                <Text bold>Update Donor</Text>
              </Center>
            </Pressable>
          </Flex>
        </VStack>
        <VStack  px="3" space={2.5} mt="5" alignSelf={'center'} bg="primary.100" padding={'2.5'} rounded="xl">
          <Heading size={'md'}>Nearest Blood Group</Heading>
          <Flex width="100%" direction="row" mb="2.5" flexWrap="wrap">
            {bloodGroup.map(value => (
              <Pressable onPress={() => console.log('press blood')} key={value}>
                <Center rounded={'xl'} size="md" width={width/5} bg="primary.300" m={1} mt={4}>
                  <Text bold>{value}</Text>
                </Center>
              </Pressable>
            ))}
          </Flex>
        </VStack>

        {/* <VStack  px="3" space={2.5} mt="2" padding={'2.5'} rounded="xl">
        <Flex direction="row-reverse" mb="2.5" _text={{color: 'coolGray.800'}}>
            <Pressable onPress={() => console.log('press')}>
              <Center rounded={'2xl'} size="md" bg="primary.500">
                <Image source={icons.sign} style={{tintColor:'red'}} />
                <Text bold>SignIn</Text>
              </Center>
            </Pressable>
            </Flex>
        </VStack> */}
      </ScrollView>
    </Box>
  );
};
export default DashBoardScreen;

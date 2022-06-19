import {Box, Button, Heading, Image, Text} from 'native-base';
import React from 'react';
import {FlatList} from 'react-native';
import {icons} from '../../../../assets/icons';

const BankScreen = () => {
  let a = [];
  for (let i = 1; i < 320; i++) {
    a.push({id: i + ''});
  }
  const renderItem = ({item}: any) => (
    <Box bg="white" marginBottom={2} rounded="md" padding={3}>
      <Box
        flexDirection="row"
        justifyContent={'space-between'}
        alignItems="center">
        <Heading color={'#5cbf7f'} fontSize={20}>Badhon Blood bank</Heading>
        <Image source={icons.bag} alt="loc" size={'10'} />
      </Box>
      <Box py={2} flexDirection="row" alignItems={'center'}>
        <Image source={icons.pin} alt="loc" style={{width: 15, height: 15}} />
        <Text fontSize={18}> uttara , Dhaka</Text>
      </Box>

      <Box
        flexDirection="row"
        justifyContent={'space-between'}
        alignItems="center">
        <Text underline fontSize={16}>+8801725854675</Text>
        <Button size={'md'} rounded="2xl" >CALL</Button>
      </Box>
    </Box>
  );
  return (
    <Box bg={'#fafafa'} flex={1}>
      <Heading color={'red.700'} textAlign={'center'} mt="1.5">
        Blood Bank
      </Heading>
      <Box padding={3} bg="#eff3f6">
        <FlatList
          data={a}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{marginBottom: 30}}
        />
      </Box>
    </Box>
  );
};

export default BankScreen;

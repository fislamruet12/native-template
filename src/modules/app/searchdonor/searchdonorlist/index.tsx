import axios from 'axios';
import {
  Box,
  Button,
  Checkbox,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {bloodGroup, nearestArea} from '../../../../utils/blood';
import {width} from '../../../../utils/handy';

const SearchDonorListScreen = (props: any) => {
  let i = 1;
  return (
    <Box flex={1} bg={'white'} padding={5}>
      <ScrollView>
        <Heading marginY={2}>Donor List</Heading>
        {bloodGroup.map(item => (
          <Box
            key={item}
            marginTop={2}
            bg="coolGray.200"
            rounded={'md'}
            padding={2}>
            
            <Box>
              <Box>
                <Text bold fontSize={20}>
                  User {i++}
                </Text>
              </Box>
              <Box>
                <Text fontSize={16}>Blood Group: {item}</Text>
              </Box>
              <Box>
                <Text fontSize={15}>Location: Malibag,Dhaka</Text>
              </Box>
              <Box>
                <Text fontSize={15}>Last Donate Date: 07 june,2022</Text>
              </Box>
            </Box>
            <Box flexDirection={'row'} justifyContent="flex-end" marginTop={2}>
              <Box marginRight={5}>
                <Button size={'sm'} _text={{fontSize:14,color:'black'}} colorScheme="amber">
                  Phone call
                </Button>
              </Box>
              <Box>
                <Button  _text={{fontSize:14,color:'black'}} colorScheme="amber"  size={'sm'}>Donor Info</Button>
              </Box>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};
export default SearchDonorListScreen;

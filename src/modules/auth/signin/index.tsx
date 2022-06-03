import axios from 'axios';
import {Box, Button, Heading, Image, Input, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {LatLong} from '../../../../typings/dataTypes';
import {AUTH_NAVIGATION} from '../../../../typings/navigation';
import {icons} from '../../../assets/icons';
import {KEY} from '../../../config';

const SignInScreen = (props: any) => {
  return (
    <Box flex={1} background="white">
      <Box alignItems={'center'} padding={10}>
        <Image source={icons.logo} />
      </Box>
      <Box >
        <Heading mx='3' bold>LOG IN</Heading>
        <Input m="3" placeholder="Phone Number"/>
        <Button m={3} onPress={() => console.log('hello worl')}>
          SIGN IN
        </Button>
        <Button
        m={'3'}
          onPress={() => props.navigation.navigate(AUTH_NAVIGATION.MAP)}>
          REGISTER
        </Button>
      </Box>
    </Box>
  );
};
export default SignInScreen;

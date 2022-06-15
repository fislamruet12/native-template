import {
  Box,
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  Link,
} from 'native-base';
import React from 'react';
import {AUTH_NAVIGATION} from '../../../../typings/navigation';
import {icons} from '../../../assets/icons';
const SignInScreen = (props: any) => {
  
  return (
    <Box flex={1} background="white">
      <Box alignItems={'center'} padding={10}>
        <Image source={icons.logo} />
      </Box>
      <Box m={3}>
        <FormControl>
          <FormControl.Label>Phone Number</FormControl.Label>
          <Input placeholder="phone number" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" placeholder='password' />
          <Link
            _text={{
              fontSize: 'xs',
              fontWeight: '500',
              color: 'indigo.500',
            }}
            alignSelf="flex-end"
            mt="3">
            Forget Password?
          </Link>
        </FormControl>
        <Button mt={3} onPress={() => console.log('hello worl')}>
          SIGN IN
        </Button>
        <Button
          mt={'3'}
          onPress={() => props.navigation.navigate(AUTH_NAVIGATION.MAP)}>
          REGISTER
        </Button>
      </Box>
    </Box>
  );
};
export default SignInScreen;

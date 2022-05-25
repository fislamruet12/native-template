import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AUTH_NAVIGATION} from '../../../typings/navigation';
import SignIn from './signin';

const Stack = createNativeStackNavigator();

const Auth = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={AUTH_NAVIGATION.SIGN_IN} component={SignIn} />
  </Stack.Navigator>
);

export default Auth;

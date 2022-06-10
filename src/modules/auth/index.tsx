import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AUTH_NAVIGATION} from '../../../typings/navigation';
import SignIn from './signin';
import MapScreen from './map';
import PhoneAuthScreen from './phone';
import InformationScreen from './information';
import OtpScreen from './information/otp';

const Stack = createNativeStackNavigator();

const Auth = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={AUTH_NAVIGATION.SIGN_IN} component={SignIn} />
    <Stack.Screen name={AUTH_NAVIGATION.MAP} component={MapScreen} />
    <Stack.Screen name={AUTH_NAVIGATION.PHONE} component={PhoneAuthScreen} />
    <Stack.Screen name={AUTH_NAVIGATION.OTP_CONFIRM} component={OtpScreen} />
    <Stack.Screen
      name={AUTH_NAVIGATION.INFO_CONFIRM}
      component={InformationScreen}
    />
  </Stack.Navigator>
);

export default Auth;

import React from 'react';
import {View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROOT_NAVIGATION} from '../../typings/navigation';

import App from './app';
import Auth from './auth';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROOT_NAVIGATION.APP} component={App} />
      <Stack.Screen name={ROOT_NAVIGATION.AUTH} component={Auth} />
    </Stack.Navigator>
  );
};

export default Navigation;

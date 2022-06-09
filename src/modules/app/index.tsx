import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoardScreen from './dashboard';
import {APP_NAVIGATION} from '../../../typings/navigation';
import SearchDonorScreen from './searchdonor';

const Stack = createNativeStackNavigator();

const App = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={APP_NAVIGATION.DASHBOARD} component={DashBoardScreen} />
    <Stack.Screen name={APP_NAVIGATION.SEARCHNDONOR} component={SearchDonorScreen} />
 
  </Stack.Navigator>
);

export default App;

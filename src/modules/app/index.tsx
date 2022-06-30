import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoardScreen from './dashboard';
import {APP_NAVIGATION} from '../../../typings/navigation';
import SearchDonorScreen from './searchdonor';
import BloodBankScreen from './bloodbank';
import DonorListScreen from './donorlist';

const Stack = createNativeStackNavigator();

const App = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={APP_NAVIGATION.DASHBOARD} component={DashBoardScreen} />
    <Stack.Screen name={APP_NAVIGATION.DONORLIST} component={DonorListScreen} />
    <Stack.Screen
      name={APP_NAVIGATION.SEARCHNDONOR}
      component={SearchDonorScreen}
    />
    <Stack.Screen name={APP_NAVIGATION.BLOODBANK} component={BloodBankScreen} />
  </Stack.Navigator>
);

export default App;

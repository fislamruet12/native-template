import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  APP_NAVIGATION,
  ROOT_NAVIGATION,
  SEARCHDONOR_NAVIGATION,
} from '../../typings/navigation';

import Auth from './auth';
import DrawerScreen from './drawer';
import BloodBankScreen from './app/bloodbank';
import DonorListScreen from './app/donorlist';
import SearchDonorScreen from './app/searchdonor';

import HelpLineScreen from './app/help';
import VolunteerScreen from './app/volunteer';
import SearchDonorListScreen from './app/searchdonor/searchdonorlist';
import RequestScreen from './app/request';
import FeedListScreen from './app/request/feed';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROOT_NAVIGATION.DRAWER} component={DrawerScreen} />

      <Stack.Screen name={ROOT_NAVIGATION.AUTH} component={Auth} />
      <Stack.Screen
        name={APP_NAVIGATION.BLOODBANK}
        component={BloodBankScreen}
      />
      <Stack.Screen
        name={APP_NAVIGATION.DONORLIST}
        component={DonorListScreen}
      />
      <Stack.Screen
        name={APP_NAVIGATION.SEARCHNDONOR}
        component={SearchDonorScreen}
      />

      <Stack.Screen name={APP_NAVIGATION.REQUEST} component={RequestScreen} />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'HELPLINE',
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
        }}
        name={APP_NAVIGATION.HELPLINE}
        component={HelpLineScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'VOLUNTEER LIST',
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
        }}
        name={APP_NAVIGATION.VOLUNTEER}
        component={VolunteerScreen}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'DONOR LIST',
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
        }}
        name={SEARCHDONOR_NAVIGATION.SEARCHDONORLIST}
        component={SearchDonorListScreen}
      />
       <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'REQUESTED BLOOD LIST',
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
        }}
        name={APP_NAVIGATION.FEED}
        component={FeedListScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

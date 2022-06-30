import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { DONORLIST_NAVIGATION } from '../../../../typings/navigation';
import DonorListItem from './listitem';

const Stack = createNativeStackNavigator();
const DonorListScreen = (props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle:"DONOR LIST",
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
        }}
        name={DONORLIST_NAVIGATION.DONORLISTITEM}
        component={DonorListItem}
      />
     
    </Stack.Navigator>
  );
};
export default DonorListScreen

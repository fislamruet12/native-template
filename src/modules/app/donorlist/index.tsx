import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { APP_NAVIGATION, DONORLIST_NAVIGATION } from '../../../../typings/navigation';
import DonorListItem from './listitem';
import MapDirectionScreen from '../mapdirection';

const Stack = createNativeStackNavigator();
const DonorListScreen = (props: any) => {
  return (
    <Stack.Navigator
      >
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle:"DONOR LIST",
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
        }}
        name={DONORLIST_NAVIGATION.DONORLISTITEM}
        component={DonorListItem}
      />
       <Stack.Screen
        options={{
          headerShown: true,
          headerTitle:"DONOR IN MAP",
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
        }}
        name={APP_NAVIGATION.MAPDIRECTION}
        component={MapDirectionScreen}
      />
     
    </Stack.Navigator>
  );
};
export default DonorListScreen

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { REQUEST_NAVIGATION } from '../../../../typings/navigation';
import BloodResquestScreen from './blood';

const Stack = createNativeStackNavigator();
const RequestScreen = (props: any) => {
  return (
    <Stack.Navigator
     >
      <Stack.Screen
        options={{
          headerTitle:"BlOOD REQUEST",
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
        }}
        name={REQUEST_NAVIGATION.BLOOD}
        component={BloodResquestScreen}
      />
     
    </Stack.Navigator>
  );
};
export default RequestScreen

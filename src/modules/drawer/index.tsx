import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import {APP_NAVIGATION, ROOT_NAVIGATION} from '../../../typings/navigation';
import {width} from '../../utils/handy';
import App from '../app';
import DashBoardScreen from '../app/dashboard';
import ContentDrawerScreen from './content';
const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <ContentDrawerScreen {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: width / 2, borderTopRightRadius: 20},
      }}>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: 'Blood Link',
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
        }}
        name={APP_NAVIGATION.DASHBOARD}
        component={DashBoardScreen}
      />
    </Drawer.Navigator>
  );
};
export default DrawerScreen;

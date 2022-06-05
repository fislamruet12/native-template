import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import {ROOT_NAVIGATION} from '../../../typings/navigation';
import { width } from '../../utils/handy';
import App from '../app';
import ContentDrawerScreen from './content';
const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <ContentDrawerScreen {...props} />}
      screenOptions={{headerShown:false,drawerStyle:{width:width/3}}}
    >
      <Drawer.Screen name={ROOT_NAVIGATION.APP} component={App} />
    </Drawer.Navigator>
  );
};
export default DrawerScreen;

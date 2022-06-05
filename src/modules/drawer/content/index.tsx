import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Box, Input, Text, View} from 'native-base';
import React from 'react';
import {Image} from 'react-native';
import {icons} from '../../../assets/icons';

const ContentDrawerScreen = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View flex={1}>
        <View alignSelf={'center'} padding={5}>
          <Image source={icons.logo} style={{width: 50, height: 50}} />
        </View>
        <View
          padding={5}
          flexDirection="row"
          justifyContent="space-between"
          borderColor={'coolGray.200'}
          borderWidth={1}>
          <View>
            <Text bold>SIGN UP</Text>
          </View>
          <View>
            <Image
              source={icons.sign}
              style={{width: 20, height: 20, tintColor: 'red'}}
            />
          </View>
        </View>
        <View
          padding={5}
          flexDirection="row"
          justifyContent="space-between"
          borderColor={'coolGray.200'}
          borderWidth={1}>
          <View>
            <Text bold>ABOUT US</Text>
          </View>
          <View>
            <Image
              source={icons.info}
              style={{width: 20, height: 20, tintColor: 'red'}}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
export default ContentDrawerScreen;

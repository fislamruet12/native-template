import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Box, Input, Text, View} from 'native-base';
import React from 'react';
import {Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { User } from '../../../../typings/structures';
import {icons} from '../../../assets/icons';
import actions from '../../../state/actions';
import { RootState } from '../../../state/reducer';

const ContentDrawerScreen = (props: any) => {
  let dispatch=useDispatch()
  const user = useSelector((state:RootState)=>state.currentUser.user) as User
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
            <Image
              source={icons.sign}
              style={{width: 20, height: 20, tintColor: 'red'}}
            />
          </View>
          <View>
            <TouchableOpacity onPress={()=>{
              if(user){
                dispatch(actions.user.removeUser())
              }
            }}>
             {
              user?
              <Text bold>SIGN OUT</Text>:
              <Text bold>SIGN IN</Text>
             }
            </TouchableOpacity>
          </View>
        </View>
        <View
          padding={5}
          flexDirection="row"
          justifyContent="space-between"
          borderColor={'coolGray.200'}
          borderWidth={1}>
          <View>
            <Image
              source={icons.info}
              style={{width: 20, height: 20, tintColor: 'red'}}
            />
          </View>
          <View>
            <Text bold>ABOUT US</Text>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
export default ContentDrawerScreen;

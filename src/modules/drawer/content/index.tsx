import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Box, Input, Text, View} from 'native-base';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {User} from '../../../../typings/structures';
import api from '../../../api';
import {icons} from '../../../assets/icons';
import actions from '../../../state/actions';
import {RootState} from '../../../state/reducer';

const ContentDrawerScreen = (props: any) => {
  let dispatch = useDispatch();
  const user = useSelector(
    (state: RootState) => state.currentUser.user,
  ) as User;
  return (
    <DrawerContentScrollView {...props}>
      <View flex={1}>
        <View bg={'primary.100'} rounded="md">

       
        <View alignSelf={'center'} padding={5} borderColor="coolGray.400" borderWidth={.5} rounded="full">
          <Image source={icons.logo} style={{width: 50, height: 50}} />
        </View>
       {
         user &&<View>
         <View  justifyContent={'center'} alignItems="center" flexDirection={'row'} my={2}>
         {/* <View mr={2}>
           <Image source={icons.user} style={{width: 30, height: 30}} />
         </View> */}
         <View>
           <Text fontFamily={"Montserrat-SemiBold"} fontSize={20}>
             {user?.name}
           </Text>
           <Text fontFamily={"Montserrat-Regular"}>+88{user.phoneNumber}</Text>
         </View>
       </View>
       
       </View>
}
</View>
{
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
           <TouchableOpacity
             onPress={() => {
               if (user) {
                try {
                  dispatch(actions.user.removeUser());
                  api.auth.SignOutRequest$()
                } catch (error) {
                  
                }
                }
             }}>
             {user ?
               <Text fontFamily={"Montserrat-SemiBold"}>SIGN OUT</Text> 
               : <Text fontFamily={"Montserrat-SemiBold"}>SIGN IN</Text>
              }
           </TouchableOpacity>
         </View>
       </View>
       }
        <View
          padding={5}
          flexDirection="row"
          justifyContent="space-between"
          borderColor={'coolGray.200'}
          borderWidth={1}>
          <View>
            <Image
              source={icons.user}
              style={{width: 20, height: 20}}
            />
          </View>
          <View>
            <Text fontFamily={"Montserrat-SemiBold"}>PROFILE</Text>
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
            <Text fontFamily={"Montserrat-SemiBold"}>ABOUT US</Text>
          </View>
        </View>
        </View>
     
    </DrawerContentScrollView>
  );
};
export default ContentDrawerScreen;

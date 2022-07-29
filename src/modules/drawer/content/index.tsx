import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Text, View} from 'native-base';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {LanType, User} from '../../../../typings/structures';
import api from '../../../api';
import {icons} from '../../../assets/icons';
import actions from '../../../state/actions';
import {RootState} from '../../../state/reducer';
import {APP_NAVIGATION} from '../../../../typings/navigation';
const ContentDrawerScreen = (props: any) => {
  let dispatch = useDispatch();
  const user = useSelector(
    (state: RootState) => state.currentUser.user,
  ) as User;

  let initlan = useSelector(
    (state: RootState) => state.currentLanguage.lan,
  ) as LanType;

  const [lan, setlan] = useState(initlan.language);
  return (
    <DrawerContentScrollView {...props}>
      <View flex={1}>
        <View>
          <View alignSelf={'center'} padding={5}>
            <Image source={icons.logo} style={{width: 50, height: 50}} />
          </View>
          {user && (
            <View>
              <View
                justifyContent={'center'}
                alignItems="center"
                flexDirection={'row'}
                my={2}>
                {/* <View mr={2}>
           <Image source={icons.user} style={{width: 30, height: 30}} />
         </View> */}
                <View>
                  <Text fontFamily={'Montserrat-SemiBold'} fontSize={20}>
                    {user?.name}
                  </Text>
                  <Text fontFamily={'Montserrat-Regular'}>
                    +88{user.phoneNumber}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
        {user && (
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
                      api.auth.SignOutRequest$();
                    } catch (error) {}
                  }
                }}>
                {user && user?.name != '' && user?.name != undefined ? (
                  <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"SIGN OUT":"সাইন আউট"}</Text>
                ) : (
                  <Text fontFamily={'Montserrat-SemiBold'}>SIGN IN</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
        {user && (
          <TouchableOpacity
            onPress={() => props.navigation.navigate(APP_NAVIGATION.PROFILE)}>
            <View
              padding={5}
              flexDirection="row"
              justifyContent="space-between"
              borderColor={'coolGray.200'}
              borderWidth={1}>
              <View>
                <Image source={icons.user} style={{width: 20, height: 20}} />
              </View>
              <View>
                <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"PROFILE":"প্রোফাইল"}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            setlan(lan === 1 ? 2 : 1)
            dispatch(actions.language.saveLan({language: lan === 1 ? 2 : 1}));
          }}>
          <View
            padding={5}
            flexDirection="row"
            justifyContent="space-between"
            borderColor={'coolGray.200'}
            borderWidth={1}>
            <View>
              <Text
                fontFamily={'Montserrat-Bold'}
                fontSize={16}
                color={lan === 1 ? 'coolGray.500' : 'primary.500'}>
                E<Text>|</Text>
                <Text
                  color={lan === 1 ? 'primary.500' : 'coolGray.500'}
                  fontFamily={'Montserrat-Bold'}>
                  B
                </Text>
              </Text>
            </View>
            <View>
              <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"LANGUAGE":"ভাষা"}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
            <Text fontFamily={'Montserrat-SemiBold'}>{lan===2?"ABOUT US":"আমাদের সম্পর্কে"}</Text>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
export default ContentDrawerScreen;

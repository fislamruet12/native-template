import {
  Box,
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  Link,
} from 'native-base';
import React, {useState} from 'react';
import {AUTH_NAVIGATION} from '../../../../typings/navigation';
import {icons} from '../../../assets/icons';
import {PASSWORD_MIN_LENGTH} from '../../../config';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {phoneRegExp} from '../../../utils/handy';
import {SignInData, SignUpData} from '../../../../typings/form-data';
import {doOnSubscribe} from '../../../utils/rxjs-utils';
import {finalize} from 'rxjs/operators';
import api from '../../../api';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import actions from '../../../state/actions';

const SignInScreen = (props: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    countryCode: Yup.string().required('Required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid.')
      .required('Phone number is required'),
    password: Yup.string()
      .min(PASSWORD_MIN_LENGTH, `Must be at least ${PASSWORD_MIN_LENGTH}`)
      .required('Password is required'),
  });

  const initialValues: SignInData = {
    countryCode: '+88',
    phoneNumber: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      api.auth
        .signInRequest$(values)
        .pipe(
          doOnSubscribe(() => setLoading(true)),
          finalize(() => setLoading(false)),
        )
        .subscribe({
          next: user => {
            console.log('Result', user);
            dispatch(actions.user.saveUser(user));
            if (user.name != '') {
              props.navigation.goBack();
            } else {
              props.navigation.navigate(AUTH_NAVIGATION.MAP);
            }
          },
          error: error => {
            console.log(error?.response);
            // Alert.alert('hi','l')
            Alert.alert("Error",JSON.stringify(error))
            // Alert.alert(
            //   '',
            //   error?.response?.data?.data
            //     ? error?.response?.data?.data
            //     : error?.response?.data?.message,
            // );
          },
        });
    },
  });

  return (
    <Box flex={1} padding={5} bg="white">
      <ScrollView>
        <Box padding={10} alignSelf="center">
          <Image
            source={icons.logo}
            alt="loc"
            style={{width: 50, height: 50}}
          />
        </Box>
        <Box>
          <Heading>Sign In</Heading>
        </Box>
        <Box marginTop={4}>
          <FormControl
            isRequired
            isInvalid={formik.errors.phoneNumber && formik.touched.phoneNumber}>
            <FormControl.Label>Phone Number</FormControl.Label>
            <Input
              type="text"
              placeholder="phone number"
              value={formik.values.phoneNumber}
              onChangeText={formik.handleChange('phoneNumber')}
              onBlur={formik.handleBlur('phoneNumber')}
            />
            <FormControl.ErrorMessage marginLeft={1}>
              {formik.errors.phoneNumber}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <FormControl
            isRequired
            isInvalid={formik.errors.password && formik.touched.password}>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              placeholder="password "
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
            <FormControl.ErrorMessage marginLeft={1}>
              {formik.errors.password}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>

        <Box m={3}>
          <FormControl>
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="3">
              Forget Password?
            </Link>
          </FormControl>
          <Button
            mt={3}
            isLoading={loading}
            isLoadingText="Signing..."
            onPress={formik.handleSubmit}>
            SIGN IN
          </Button>
          <Button
            mt={'3'}
            onPress={() => props.navigation.navigate(AUTH_NAVIGATION.PHONE)}>
            REGISTER
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default SignInScreen;

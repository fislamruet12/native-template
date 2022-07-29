import {
  Box,
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {AUTH_NAVIGATION} from '../../../../typings/navigation';
import {icons} from '../../../assets/icons';
import {PASSWORD_MIN_LENGTH} from '../../../config';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {phoneRegExp} from '../../../utils/handy';
import {SignUpData} from '../../../../typings/form-data';
import {doOnSubscribe} from '../../../utils/rxjs-utils';
import {finalize} from 'rxjs/operators';
import api from '../../../api';
import {ScrollView} from 'react-native-gesture-handler';
import {Alert} from 'react-native';

const PhoneAuthScreen = (props: any) => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    countryCode: Yup.string().required('Required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid.')
      .required('Phone number is required'),
    password: Yup.string()
      .min(PASSWORD_MIN_LENGTH, `Must be at least ${PASSWORD_MIN_LENGTH}`)
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm your password')
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });

  const initialValues: SignUpData = {
    countryCode: '+880',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      api.auth
        .signUpRequest$(values)
        .pipe(
          doOnSubscribe(() => setLoading(true)),
          finalize(() => setLoading(false)),
        )
        .subscribe({
          next: response => {
            console.log('Result', response.data);
            let otp = response.data.message.otp;
            props.navigation.navigate(AUTH_NAVIGATION.OTP_CONFIRM, {
              crediential: values,
              otp: otp,
            });
          },
          error: error => {
            console.log(error);
            Alert.alert('', error?.response?.data?.errors?.phone_number[0]);
          },
        });
    },
  });

  // console.log(formik.errors, 1);
  return (
    <Box flex={1} padding={5} bg="white">
      <ScrollView>
        <Box padding={10} alignSelf="center">
          <Image
            source={icons.logo}
            alt="loc"
            style={{width: 80, height: 80}}
          />
        </Box>
        <Box>
          <Text fontFamily="Montserrat-Bold" fontSize={22}>
            SIGN UP
          </Text>
        </Box>
        <Box marginTop={4}>
          <FormControl
            isRequired
            isInvalid={formik.errors.phoneNumber && formik.touched.phoneNumber}>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Phone Number
            </FormControl.Label>
            <Input
              keyboardType='phone-pad'
              placeholder="phone number"
              value={formik.values.phoneNumber}
              onChangeText={formik.handleChange('phoneNumber')}
              onBlur={formik.handleBlur('phoneNumber')}
            />
            <FormControl.ErrorMessage
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginLeft={1}>
              {formik.errors.phoneNumber}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <FormControl
            isRequired
            isInvalid={formik.errors.password && formik.touched.password}>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Password
            </FormControl.Label>
            <Input
           //   type="password"
              placeholder="password "
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
            <FormControl.ErrorMessage
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginLeft={1}>
              {formik.errors.password}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <FormControl
            isRequired
            isInvalid={
              formik.errors.confirmPassword && formik.touched.confirmPassword
            }>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Confirm Password
            </FormControl.Label>
            <Input
             // type="password"
              placeholder="confirm password"
              value={formik.values.confirmPassword}
              onChangeText={formik.handleChange('confirmPassword')}
              onBlur={formik.handleBlur('confirmPassword')}
            />
            <FormControl.ErrorMessage
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginLeft={1}>
              {formik.errors.confirmPassword}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>

        <Button
          mt={5}
          _text={{fontFamily: 'Montserrat-SemiBold'}}
          isLoading={loading}
          isLoadingText="Submitting"
          onPress={formik.handleSubmit}>
          REQUEST OTP
        </Button>
      </ScrollView>
    </Box>
  );
};
export default PhoneAuthScreen;

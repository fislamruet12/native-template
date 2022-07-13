import {Box, Button, Heading, Input, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {AUTH_NAVIGATION} from '../../../../typings/navigation';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {styles} from '../../../utils/style';
import {PIN_LENGTH} from '../../../config';
import api from '../../../api';
import {SignUpConfirmData} from '../../../../typings/form-data';
import {doOnSubscribe} from '../../../utils/rxjs-utils';
import {finalize} from 'rxjs/operators';
import {Alert} from 'react-native';

const OtpScreen = (props: any) => {
  let credInfo = props.route.params;
  const [serverCode, setserverCode] = useState(credInfo.otp);
  const [codes, setCode] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const confirmOtp = () => {
    let confirmData: SignUpConfirmData = {
      countryCode: '+88', //credInfo.crediential.countryCode,
      phoneNumber: credInfo.crediential.phoneNumber,
      otp: credInfo.otp,
    };
    console.log(confirmData);
    api.auth
      .signUpConfirmRequest$(confirmData)
      .pipe(
        doOnSubscribe(() => setLoading(true)),
        finalize(() => setLoading(false)),
      )
      .subscribe({
        next: response => {
          console.log('Result', response.data);
          props.navigation.popToTop();
        },
        error: error => {
          console.log(error);
          Alert.alert('', error?.response?.data?.errors?.phone_number);
        },
      });
  };
  useEffect(() => {
    // const unsubscribe = props.navigation.addListener('focus', () => {
    //   // The screen is focused
    //   // Call any action
    //   setCode('');
    //   setStatus('');
    // });
    
     setCode(credInfo.otp)
    // Return the function to unsubscribe from the event so it gets removed on unmount
   // return unsubscribe;
  }, []);
  console.log(credInfo.otp);
  return (
    <Box flex={1} justifyContent="center" bg={'white'}>
      <Text
        fontFamily="Montserrat-Bold"
        padding={4}
        fontSize={18}
        textAlign="center">
        Please,Confirm your OTP.
      </Text>
      <Box padding={5}>
        <Box alignItems={'center'}>
          <OTPInputView
            style={{width: '80%', height: 100}}
            pinCount={PIN_LENGTH}
            code={codes} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={code => {
              setCode(code);
              //  console.log(code)
              if (code.length === PIN_LENGTH && code != serverCode)
                setStatus('Otp is not Matched');
              else if (code.length === PIN_LENGTH && code === serverCode) {
                setStatus('Otp is Matched');
              } else setStatus('');
            }}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
              if (code != serverCode) setStatus('Otp is not Matched');
              else {
                // props.navigation.navigate(AUTH_NAVIGATION.INFO_CONFIRM, {
                //   latlonAddress: latlonAddress,
                // })
              }
            }}
          />
        </Box>
        <Box>
          <Button
            _text={{fontFamily: 'Montserrat-SemiBold'}}
            mt={5}
            onPress={() => confirmOtp()}>
            CONFIRM
          </Button>
          <Button
            mt={5}
            _text={{fontFamily: 'Montserrat-SemiBold'}}
            onPress={() => props.navigation.navigate(AUTH_NAVIGATION.MAP)}>
            RESEND OTP
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default OtpScreen;

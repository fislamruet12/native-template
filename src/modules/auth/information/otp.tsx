import {Box, Button, Heading, Input, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {AUTH_NAVIGATION} from '../../../../typings/navigation';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {styles} from '../../../utils/style';
import {PIN_LENGTH} from '../../../config';

const OtpScreen = (props: any) => {
  let latlonAddress = props.route.params;
  const [serverCode, setserverCode] = useState('2345');
  const [codes, setCode] = useState('');
  const [status, setStatus] = useState('');
  console.log(status);
  useEffect(()=>{
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      setCode('')
      setStatus('')
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  },[])
  return (
    <Box alignItems="center" flex={1} justifyContent="center" bg={'white'}>
     <Heading padding={4} fontSize={18} _light={{color:'green.300'}}>
            Confirm OTP
            </Heading>
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
            props.navigation.navigate(AUTH_NAVIGATION.INFO_CONFIRM, {
              latlonAddress: latlonAddress,
            })
          }
        }}
      />
     
       <Box>
      
       <Button
          mt={5}
          onPress={() =>
            props.navigation.navigate(AUTH_NAVIGATION.INFO_CONFIRM, {
              latlonAddress: latlonAddress,
            })
          }>
          Resend OTP
        </Button>
       </Box>
        <Box mt={5} position="absolute" bottom={10}>
        {status != '' && (
           <Heading rounded={'2xl'} highlight padding={4} fontSize={18} _light={{color:'red.900'}}>
            {status}.
            </Heading>
        )}
      </Box>
    </Box>
  );
};
export default OtpScreen;

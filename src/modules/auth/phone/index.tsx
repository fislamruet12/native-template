import axios from 'axios';
import {Box, Button, FormControl, Image, Input, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {LatLong} from '../../../../typings/dataTypes';
import {AUTH_NAVIGATION} from '../../../../typings/navigation';
import {icons} from '../../../assets/icons';
import {KEY} from '../../../config';

const PhoneAuthScreen = (props: any) => {
  let currentPos = props.route.params as LatLong;
  const [address, setaddress] = useState('');

  useEffect(() => {
    getFullAdress();
  }, []);

  const getFullAdress = () => {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentPos.latitude},${currentPos.longitude}&key=${KEY}`;

    axios
      .get(url)
      .then(res => {
        console.log(res.data.results[0]?.formatted_address);
        setaddress(res?.data?.results[0]?.formatted_address);
      })
      .catch(err => {});
  };
  return (
    <Box  flex={1} padding={5} bg="white">
      <Box padding={10} flexDirection="row">
        <Image source={icons.pin} alt="loc" style={{width: 20, height: 20}} />
        <Text bold> {address.trim()}</Text>
      </Box>
    
      <Box marginTop={4}>
          <FormControl>
            <FormControl.Label>Phone Number</FormControl.Label>
            <Input type="password" placeholder="phone number" />
          </FormControl>
        </Box>
      <Box marginTop={4}>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" placeholder="password " />
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" placeholder="confirm password" />
          </FormControl>
        </Box>
      {address != '' && (
        <Button
          mt={5}
          onPress={() =>
            props.navigation.navigate(AUTH_NAVIGATION.OTP_CONFIRM,{
              currentPos:currentPos,
              address:address
            })
          }>
          Request OTP
        </Button>
      )}
    </Box>
  );
};
export default PhoneAuthScreen;

import axios from 'axios';
import {Box, Button, Image, Input, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {LatLong} from '../../../../typings/dataTypes';
import { AUTH_NAVIGATION } from '../../../../typings/navigation';
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
    <Box alignItems="center" flex={1} justifyContent="center">
      <Box padding={10} flexDirection="row">
        <Image source={icons.pin} alt="loc" style={{width: 20, height: 20}} />
        <Text bold> {address.trim()}</Text>
      </Box>
      <Input mx="3" placeholder="Phone Number" w="75%" maxWidth="300px" />
      <Button mt={5} onPress={() => props.navigation.navigate(AUTH_NAVIGATION.OTP_CONFIRM)}>
        Request OTP
      </Button>
    </Box>
  );
};
export default PhoneAuthScreen;

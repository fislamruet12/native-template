import axios from 'axios';
import {Box, Button, Image, Input, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {LatLong} from '../../../../typings/dataTypes';
import {icons} from '../../../assets/icons';
import {KEY} from '../../../config';

const InformationScreen = (props: any) => {
  
  return (
    <Box alignItems="center" flex={1} justifyContent="center">
      <Input mx="3" placeholder="Phone Number" w="75%" maxWidth="300px" />
      <Button mt={5} onPress={() => console.log('hello worl')}>
        Confirm Info
      </Button>
    </Box>
  );
};
export default InformationScreen;
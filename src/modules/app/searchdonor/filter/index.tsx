import axios from 'axios';
import {
  Box,
  Button,
  Checkbox,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import { SEARCHDONOR_NAVIGATION } from '../../../../../typings/navigation';
import {bloodGroup, nearestArea} from '../../../../utils/blood';
import {District, Division, Upazila} from '../../../../utils/country';
import {width} from '../../../../utils/handy';

let divisionList = Division();
const SearchDonorFilterScreen = (props: any) => {
  let [division, setDivision] = React.useState<string>('');
  let [district, setDistrict] = React.useState<string>('');
  let [upazila, setUpazila] = React.useState<string>('');

  let [blood, setBlood] = useState<string>('O+');
  let [distance, setDistance] = useState<string>('5');
  let districtList = District(division);
  let upazilaList = Upazila(district);

  return (
    <Box flex={1} bg={'white'} padding={5}>
      <ScrollView>
        <Heading marginY={2}>Search Donor</Heading>
        <Box
          flexDirection={'row'}
          justifyContent="space-between"
          alignItems={'center'}>
          <Box>
            <Heading size={'sm'} marginBottom={1}>
              Division
            </Heading>
            <Select
              placeholder="Division List"
              selectedValue={division}
              width={width / 2 - 40}
              onValueChange={(itemValue: string) => setDivision(itemValue)}>
              {divisionList.map(item => (
                <Select.Item
                  key={item.division}
                  label={item.division}
                  value={item.division}
                />
              ))}
            </Select>
          </Box>
          <Box>
            <Heading size={'sm'} marginBottom={1}>
              District
            </Heading>
            <Select
              placeholder="District List"
              selectedValue={district}
              width={width / 2 - 40}
              onValueChange={(itemValue: string) => setDistrict(itemValue)}>
              {districtList.map(item => (
                <Select.Item
                  key={item.district}
                  label={item.district}
                  value={item.district}
                />
              ))}
            </Select>
          </Box>
        </Box>

        <Box marginTop={4}>
          <Heading size={'sm'} marginBottom={1}>
            Upazila
          </Heading>
          <Select
            placeholder="Upazila List"
            selectedValue={upazila}
            // width={150}
            onValueChange={(itemValue: string) => setUpazila(itemValue)}>
            {upazilaList.map(item => (
              <Select.Item
                key={item.upazila}
                label={item.upazila}
                value={item.upazila}
              />
            ))}
          </Select>
        </Box>

        <Box marginTop={6}>
         <Box>
         <Checkbox
            shadow={2}
            value="test"
            accessibilityLabel="This is a dummy checkbox" >
           Select Nearest Distance (Km)
          </Checkbox>
         </Box>
         <Box marginY={2}>
         <Select
            placeholder="distance"
            selectedValue={distance}
            onValueChange={(itemValue: string) => setDistance(itemValue)}>
            {nearestArea.map(item => (
              <Select.Item key={item} label={item.toString()} value={item.toString()} />
            ))}
          </Select>
         </Box>
        </Box>
        <Box marginTop={4}>
          <Heading size={'sm'} marginBottom={1}>
            Blood Group
          </Heading>
          <Select
            placeholder="Blood Group"
            selectedValue={blood}
            onValueChange={(itemValue: string) => setBlood(itemValue)}>
            {bloodGroup.map(item => (
              <Select.Item key={item} label={item} value={item} />
            ))}
          </Select>
        </Box>

        <Box>
          <Button mt={5} onPress={() => props.navigation.navigate(SEARCHDONOR_NAVIGATION.SEARCHDONORLIST)}>
            SEARCH DONOR
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default SearchDonorFilterScreen;

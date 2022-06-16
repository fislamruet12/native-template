import {
  Box,
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {icons} from '../../../assets/icons';
import {District, Division, Upazila} from '../../../utils/country';
import {ScrollView} from 'react-native';
import {bloodGroup} from '../../../utils/blood';

import ModernDatePicker from '../../../component/datePicker';
import moment from 'moment';
import {DATE_FORMAT} from '../../../config';
import {width} from '../../../utils/handy';
import { ROOT_NAVIGATION } from '../../../../typings/navigation';
let divisionList = Division();
const InformationScreen = (props: any) => {
  // console.log(props.route.params);
  let {latlonAddress} = props.route.params;
  let [division, setDivision] = React.useState<string>('Barisal');
  let [district, setDistrict] = React.useState<string>('Barguna');
  let [upazila, setUpazila] = React.useState<string>('Amtali Upazila');
  let [dateOfBirth, setDateofBirth] = useState<string>(
    moment().format(DATE_FORMAT),
  );
  let [dateOfdonate, setDateofDonate] = useState<string>(
    moment().subtract(130, 'days').format(DATE_FORMAT),
  );
  let [blood, setBlood] = useState<string>('O+');
  let districtList = District(division);
  let upazilaList = Upazila(district);
  console.log(dateOfBirth);
  return (
    <Box flex={1} bg={'white'}>
      <ScrollView style={{padding:15}}>
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
            Thana
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
        <Box marginTop={4}>
          <Heading size={'sm'} marginBottom={1}>
            Address:
          </Heading>
          <Box padding={2} flexDirection="row">
            <Image
              source={icons.pin}
              alt="loc"
              style={{width: 20, height: 20}}
            />
            <Text bold> {latlonAddress.address}</Text>
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
        <Box marginTop={4}>
        <FormControl>
            <FormControl.Label>Donor Name</FormControl.Label>
            <Input type="text" placeholder="Donor name" />
          </FormControl>
        </Box>
        <Box marginTop={4}>
        <FormControl>
            <FormControl.Label>Donor Email</FormControl.Label>
            <Input type="text" placeholder="Donor Email" />
          </FormControl>
        </Box>
        <Box marginTop={4}>
        <FormControl>
            <FormControl.Label>Donor NID</FormControl.Label>
            <Input type="text" placeholder="NID Here" />
          </FormControl>
        </Box>
        <Box marginTop={4}>
           <FormControl>
         
            <FormControl.Label>Birth Date:</FormControl.Label>
            <ModernDatePicker
            head={`Date of Birth`}
            date={dateOfBirth}
            getDatefromDatePicker={(date: string) => setDateofBirth(date)}
            error={''}
          />
          </FormControl>
          
        </Box>

        <Box marginTop={4}>
          <FormControl>
          
            <FormControl.Label>Last Blood Donation Date:</FormControl.Label>
            <ModernDatePicker
            head={`Date of Donate`}
            date={dateOfdonate}
            getDatefromDatePicker={(date: string) => setDateofDonate(date)}
            error={''}
          />
          </FormControl>
         
        </Box>
     
        <Box marginBottom={5}>
          <Button mt={5} onPress={() => props.navigation.navigate(ROOT_NAVIGATION.DRAWER)}>
            CONFIRM INFORMATION
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default InformationScreen;

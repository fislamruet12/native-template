import {Box, Button, Heading, Image, Input, Select, Text} from 'native-base';
import React, {useState} from 'react';
import {icons} from '../../../assets/icons';
import {District, Division, Upazila} from '../../../utils/country';
import {ScrollView} from 'react-native';
import {bloodGroup} from '../../../utils/blood';

import ModernDatePicker from '../../../component/datePicker';
import moment from 'moment';
import {DATE_FORMAT} from '../../../config';
import {width} from '../../../utils/handy';
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
    moment().subtract(130,'days').format(DATE_FORMAT),
  );
  let [blood, setBlood] = useState<string>('O+');
  let districtList = District(division);
  let upazilaList = Upazila(district);
  console.log(dateOfBirth);
  return (
    <Box flex={1} bg={'white'} padding={5}>
      <ScrollView>
        <Box flexDirection={'row'} justifyContent='space-between' alignItems={'center'}>
          <Box>
            <Heading size={'sm'} marginBottom={1}>
              Division
            </Heading>
            <Select
              placeholder="Division List"
              selectedValue={division}
              width={width / 2-40}
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
               width={width/2-40}
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
          <Heading size={'sm'} marginBottom={1}>
            Name:
          </Heading>
          <Input placeholder="Name Here" />
        </Box>
        <Box marginTop={4}>
          <Heading size={'sm'} marginBottom={1}>
            NID:
          </Heading>
          <Input placeholder="NID Here" />
        </Box>
        <Box marginTop={4}>
          <Heading size={'sm'} marginBottom={1}>
            Birth Date:
          </Heading>
          <ModernDatePicker
            head={`Date of Birth`}
            date={dateOfBirth}
            getDatefromDatePicker={(date: string) => setDateofBirth(date)}
            error={''}
          />
        </Box>

        <Box marginTop={4}>
          <Heading size={'sm'} marginBottom={1}>
            Last Blood Donation Date:
          </Heading>
          <ModernDatePicker
            head={`Date of Birth`}
            date={dateOfdonate}
            getDatefromDatePicker={(date: string) => setDateofDonate(date)}
            error={''}
          />
        </Box>

        <Box>
          <Button mt={5} onPress={() => console.log('hello worl')}>
            CONFIRM INFORMATION
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default InformationScreen;

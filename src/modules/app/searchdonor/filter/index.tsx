import {
  Box,
  Button,
  Select,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import useDistrict from '../../../../hoc/useDistrict';
import useDivision from '../../../../hoc/useDivision';
import useThana from '../../../../hoc/useThana';
import {bloodGroup, nearestArea} from '../../../../utils/blood';

import {width} from '../../../../utils/handy';


const SearchDonorFilterScreen = (props: any) => {
  const {divisionLoading, divisions} = useDivision();

  let [division, setDivision] = React.useState<number>(divisions[0].id);
  const {districtLoading, districts} = useDistrict(division);

  let [district, setDistrict] = React.useState<number>(districts[0].id);
  const {thanaLoading, thanas} = useThana(district);
  let [thana, setThana] = React.useState<number>(thanas[0].id);

  let [blood, setBlood] = useState<string>('O+');
  let [distance, setDistance] = useState<string>('5');

  //console.log(districts)
  return (
    <Box flex={1} bg={'white'} padding={5}>
      <ScrollView>
        <Box
          flexDirection={'row'}
          justifyContent="space-between"
          alignItems={'center'}>
          <Box>
          <Text fontFamily={"Montserrat-SemiBold"}>Division</Text>
       
            <Select
              placeholder="Division List"
              selectedValue={division + ''}
              
              width={width / 2 - 40}
              onValueChange={(itemValue: string) =>
                setDivision(parseInt(itemValue))
              }>
              {divisions.map(item => (
                <Select.Item
                  key={item.id}
                  label={item.name_en}
                  value={item.id + ''}
                />
              ))}
            </Select>
          </Box>
          <Box>
          <Text fontFamily={"Montserrat-SemiBold"}>District</Text>
       
            <Select
              placeholder="District List"
              selectedValue={district + ''}
              width={width / 2 - 40}
              onValueChange={(itemValue: string) =>
                setDistrict(parseInt(itemValue))
              }>
              {districts.map(item => (
                <Select.Item
                  key={item.id}
                  label={item.name_en}
                  value={item.id + ''}
                />
              ))}
            </Select>
          </Box>
        </Box>

        <Box marginTop={4}>
          <Text fontFamily={'Montserrat-SemiBold'}>Thana</Text>

          <Select
            placeholder="Upazila List"
            selectedValue={thana + ''}
            // width={150}
            onValueChange={(itemValue: string) =>
              setThana(parseInt(itemValue))
            }>
            {thanas.map(item => (
              <Select.Item
                key={item.id}
                label={item.name_en}
                value={item.id + ''}
              />
            ))}
          </Select>
        </Box>

        <Box marginTop={6}>
          <Box>
            <Text fontFamily={'Montserrat-SemiBold'}>Nearest Coverage</Text>
          </Box>
          <Box>
            <Select
              placeholder="distance"
              selectedValue={distance}
              onValueChange={(itemValue: string) => setDistance(itemValue)}>
              {nearestArea.map(item => (
                <Select.Item
                  key={item}
                  label={item.toString()}
                  value={item.toString()}
                />
              ))}
            </Select>
          </Box>
        </Box>
        <Box marginTop={4}>
          <Text fontFamily={'Montserrat-SemiBold'}>Blood Group</Text>

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
          <Button
            mt={5}
            _text={{fontFamily:'Montserrat-SemiBold'}}
            onPress={() =>
              Alert.alert("",'Under Developed')
             // props.navigation.navigate(SEARCHDONOR_NAVIGATION.SEARCHDONORLIST)
            }>
            SEARCH DONOR
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default SearchDonorFilterScreen;

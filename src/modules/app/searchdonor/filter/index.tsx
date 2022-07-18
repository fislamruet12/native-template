import {useFormik} from 'formik';
import {Box, Button, FormControl, Select, Text} from 'native-base';
import React, {useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import useDistrict from '../../../../hoc/useDistrict';
import useDivision from '../../../../hoc/useDivision';
import useThana from '../../../../hoc/useThana';
import {bloodGroup, nearestArea} from '../../../../utils/blood';
import * as Yup from 'yup';
import {width} from '../../../../utils/handy';
import {QueryDonorType} from '../../../../../typings/dataTypes';
import { SEARCHDONOR_NAVIGATION } from '../../../../../typings/navigation';

const SearchDonorFilterScreen = (props: any) => {
  const {divisionLoading, divisions} = useDivision();

  let [division, setDivision] = React.useState<number>(divisions[0].id);
  const {districtLoading, districts} = useDistrict(division);

  let [district, setDistrict] = React.useState<number>(districts[0].id);
  const {thanaLoading, thanas} = useThana(district);
  let [thana, setThana] = React.useState<number>(thanas[0].id);

  let [blood, setBlood] = useState<string>('O+');
  let [distance, setDistance] = useState<string>(nearestArea[0].toString());

  //console.log(districts)

  const validationSchema = Yup.object().shape({
    blood_group: Yup.string().required('Blood group is required'),
    division_id: Yup.number().test(
      'selection',
      'Division Required',
      number => number !== undefined,
    ),
    district_id: Yup.number().test(
      'selection',
      'District Required',
      number => number !== undefined,
    ),
    upazila_id: Yup.number().test(
      'selection',
      'Thana Required',
      number => number !== undefined,
    ),
  });

  const initialValues: QueryDonorType = {
    blood_group: 'A+',
    division_id: divisions[0].id,
    district_id: districts[0].id,
    upazila_id: thanas[0].id,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
      props.navigation.navigate(SEARCHDONOR_NAVIGATION.SEARCHDONORLIST,values)
    },
  });
  return (
    <Box flex={1} bg={'white'} padding={5}>
      <ScrollView>
        <Box
          flexDirection={'row'}
          justifyContent="space-between"
          alignItems={'center'}>
          <Box>
            <Text fontFamily={'Montserrat-SemiBold'}>Division</Text>

            <Select
              fontFamily={'Montserrat-Regular'}
              placeholder="Division List"
              selectedValue={formik.values.division_id + ''}
              width={width / 2 - 40}
              onValueChange={(itemValue: string) =>{
              //  setDivision(parseInt(itemValue))
                formik.setFieldValue('division_id',parseInt(itemValue))
              }

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
            <Text fontFamily={'Montserrat-SemiBold'}>District</Text>

            <Select
              fontFamily={'Montserrat-Regular'}
              placeholder="District List"
              selectedValue={formik.values.district_id + ''}
              width={width / 2 - 40}
              onValueChange={(itemValue: string) =>
                formik.setFieldValue('district_id',parseInt(itemValue))
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
            fontFamily={'Montserrat-Regular'}
            placeholder="Upazila List"
            selectedValue={formik.values.upazila_id + ''}
            // width={150}
            onValueChange={(itemValue: string) =>
              formik.setFieldValue('upazila_id',parseInt(itemValue))
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

        {/* <Box marginTop={6}>
          <Box>
            <Text fontFamily={'Montserrat-SemiBold'}>Nearest Coverage</Text>
          </Box>
          <Box>
            <Select
              fontFamily={'Montserrat-Regular'}
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
        </Box> */}
        <Box marginTop={4}>
          <FormControl isRequired>
            <FormControl.Label
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginBottom={1}>
              Blood Group
            </FormControl.Label>
            <Select
              fontFamily={'Montserrat-Regular'}
              placeholder="Blood Group"
              selectedValue={formik.values.blood_group}
              onValueChange={formik.handleChange('blood_group')}>
              {bloodGroup.map(item => (
                <Select.Item key={item} label={item} value={item} />
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button
            mt={5}
            _text={{fontFamily: 'Montserrat-SemiBold'}}
            onPress={
              formik.handleSubmit
             }>
            SEARCH DONORS 
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default SearchDonorFilterScreen;

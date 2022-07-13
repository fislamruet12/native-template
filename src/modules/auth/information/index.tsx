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
import React, {useEffect, useState} from 'react';
import {icons} from '../../../assets/icons';
import {Alert, ScrollView} from 'react-native';
import {bloodGroup, genderList} from '../../../utils/blood';

import ModernDatePicker from '../../../component/datePicker';
import moment from 'moment';
import {DATE_FORMAT, KEY} from '../../../config';
import {width} from '../../../utils/handy';
import axios from 'axios';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {UserDetails} from '../../../../typings/form-data';
import {doOnSubscribe} from '../../../utils/rxjs-utils';
import {finalize} from 'rxjs/operators';
import api from '../../../api';
import {LatLong} from '../../../../typings/dataTypes';
import useDivision from '../../../hoc/useDivision';
import useDistrict from '../../../hoc/useDistrict';
import useThana from '../../../hoc/useThana';
import {ROOT_NAVIGATION} from '../../../../typings/navigation';
import {store} from '../../../state';
import {useDispatch} from 'react-redux';
import actions from '../../../state/actions';
import {User} from '../../../../typings/structures';

const InformationScreen = (props: any) => {
  // console.log(props.route.params);
  const dispatch = useDispatch();
  const userinfo = store.getState().currentUser.user;
  let currentPos = props.route.params as LatLong;
  let {divisionLoading, divisions} = useDivision();

  let [division, setDivisions] = React.useState<number>(divisions[0].id);
  const {districtLoading, districts} = useDistrict(division);

  let [district, setDistrict] = React.useState<number>(districts[0].id);
  let {thanaLoading, thanas} = useThana(district);

  const [loading, setLoading] = useState(false);

  const [address, setaddress] = useState('');

  useEffect(() => {
    getFullAdress();
  }, []);
  const getFullAdress = () => {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentPos.latitude},${currentPos.longitude}&key=${KEY}`;
    axios.get(url).then(res => {
      // setaddress(res?.data?.results[0]?.formatted_address);
      formik.setFieldValue('address', res?.data?.results[0]?.formatted_address);
    });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Donor name is required'),
    email: Yup.string(),
    blood_group: Yup.string().required('Blood group is required'),
    birth_date: Yup.string(),
    NID_number: Yup.string().required('NID number is required'),
    gender: Yup.string().required('Gender is required'),
    latitude: Yup.number(),
    longitude: Yup.number(),
    address: Yup.string(),
    division_id: Yup.number().test(
      'selection',
      'Division Required',
      number => number !== 0,
    ),
    district_id: Yup.number().test(
      'selection',
      'District Required',
      number => number !== 0,
    ),
    upazila_id: Yup.number().test(
      'selection',
      'Thana Required',
      number => number !== 0,
    ),
  });

  const initialValues: UserDetails = {
    name: '',
    email: '',
    blood_group: 'A+',
    birth_date: moment().format(DATE_FORMAT),
    NID_number: '',
    gender: 'Male',
    latitude: currentPos.latitude,
    longitude: currentPos.longitude,
    address: '',
    division_id: divisions[0].id,
    district_id: districts[0].id,
    upazila_id: thanas[0].id,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
      api.auth
        .userDetailsRequest$(values)
        .pipe(
          doOnSubscribe(() => setLoading(true)),
          finalize(() => setLoading(false)),
        )
        .subscribe({
          next: response => {
            //console.log('Result', response.data);
            const res = response.data.data;
            //  console.log('res',res,res?.name)
            const demouser: any = {
              name: res?.name,
              email: res?.email,
              id: userinfo?.id,
              accessToken: userinfo?.accessToken,
              countryCode: userinfo?.countryCode,
              phoneNumber: userinfo?.phoneNumber,
            };
            //  console.log('demo',demouser)
            dispatch(actions.user.saveUser(demouser));
            props.navigation.navigate(ROOT_NAVIGATION.DRAWER);
          },
          error: error => {
            console.log(error);
            Alert.alert('Donor Info', 'Something Wrong.');
          },
        });
    },
  });

  //console.log(formik.errors,formik.values);
  return (
    <Box flex={1} bg={'white'}>
      <ScrollView style={{padding: 15}}>
        <Box
          flexDirection={'row'}
          justifyContent="space-between"
          alignItems={'center'}>
          <Box>
            <FormControl
              isRequired
              isInvalid={
                formik.errors.division_id && formik.touched.division_id
              }>
              <FormControl.Label
                _text={{fontFamily: 'Montserrat-SemiBold'}}
                marginBottom={1}>
                Division
              </FormControl.Label>
              <Select
                placeholder="Division List"
                fontFamily={'Montserrat-Regular'}
                selectedValue={formik.values.division_id + ''}
                width={width / 2 - 40}
                onValueChange={(itemValue: string) => {
                  formik.setFieldValue('division_id', parseInt(itemValue));
                  setDivisions(parseInt(itemValue));
                }}>
                {divisions.map(item => (
                  <Select.Item
                    key={item.id}
                    label={item.name_en}
                    value={item.id + ''}
                  />
                ))}
              </Select>
              <FormControl.ErrorMessage marginLeft={1}>
                {formik.errors.division_id}
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired isInvalid={false}>
              <FormControl.Label
                _text={{fontFamily: 'Montserrat-SemiBold'}}
                marginBottom={1}>
                District
              </FormControl.Label>
              <Select
                placeholder="District List"
                fontFamily={'Montserrat-Regular'}
                selectedValue={formik.values.district_id + ''}
                width={width / 2 - 40}
                onValueChange={(itemValue: string) => {
                  formik.setFieldValue('district_id', parseInt(itemValue));
                  setDistrict(parseInt(itemValue));
                }}>
                {districts.map(item => (
                  <Select.Item
                    key={item.id}
                    label={item.name_en}
                    value={item.id + ''}
                  />
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box marginTop={4}>
          <FormControl isRequired isInvalid={false}>
            <FormControl.Label
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginBottom={1}>
              Thana
            </FormControl.Label>
            <Select
              placeholder="Upazila List"
              fontFamily={'Montserrat-Regular'}
              selectedValue={formik.values.upazila_id + ''}
              // width={150}
              onValueChange={(itemValue: string) =>
                formik.setFieldValue('upazila_id', parseInt(itemValue))
              }>
              {thanas.map(item => (
                <Select.Item
                  key={item.id}
                  label={item.name_en}
                  value={item.id + ''}
                />
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <Text fontFamily={'Montserrat-SemiBold'} marginBottom={1}>
            Address:
          </Text>
          <Box padding={2} flexDirection="row">
            <Image
              source={icons.pin}
              alt="loc"
              style={{width: 20, height: 20}}
            />
            <Text fontFamily={'Montserrat-SemiBold'}>
              {formik.values.address}
            </Text>
          </Box>
        </Box>
        <Box marginTop={4}>
          <FormControl isRequired>
            <FormControl.Label
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginBottom={1}>
              Gender
            </FormControl.Label>
            <Select
              fontFamily={'Montserrat-Regular'}
              fontFamily={'Montserrat-Regular'}
              placeholder="Gender"
              selectedValue={formik.values.gender}
              onValueChange={formik.handleChange('gender')}>
              {genderList.map(item => (
                <Select.Item key={item} label={item} value={item} />
              ))}
            </Select>
          </FormControl>
        </Box>
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
        <Box marginTop={4}>
          <FormControl
            isRequired
            isInvalid={formik.errors.name && formik.touched.name}>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Donor Name
            </FormControl.Label>
            <Input
              type="text"
              placeholder="Donor name"
              value={formik.values.name}
              onChangeText={formik.handleChange('name')}
              onBlur={formik.handleBlur('name')}
            />
            <FormControl.ErrorMessage
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginLeft={1}>
              {formik.errors.name}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <FormControl>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Donor Email
            </FormControl.Label>
            <Input
              type="text"
              placeholder="Donor Email"
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
            />
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <FormControl
            isRequired
            isInvalid={formik.errors.NID_number && formik.touched.NID_number}>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Donor NID
            </FormControl.Label>
            <Input
              type="text"
              placeholder="NID Here"
              value={formik.values.NID_number}
              onChangeText={formik.handleChange('NID_number')}
              onBlur={formik.handleBlur('NID_number')}
            />
            <FormControl.ErrorMessage
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginLeft={1}>
              {formik.errors.NID_number}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <FormControl isRequired>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Birth Date:
            </FormControl.Label>
            <ModernDatePicker
              head={`Date of Birth`}
              date={formik.values.birth_date}
              getDatefromDatePicker={(date: string) =>
                formik.setFieldValue('birth_date', date)
              }
              error={''}
            />
          </FormControl>
        </Box>

        <Box marginBottom={5}>
          <Button
            _text={{fontFamily: 'Montserrat-SemiBold'}}
            isLoading={divisionLoading || loading}
            isLoadingText="Requesting"
            mt={5}
            onPress={formik.handleSubmit}>
            CONFIRM INFORMATION
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default InformationScreen;

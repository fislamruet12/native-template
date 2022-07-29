import {Box, Button, FormControl, Input, Select, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {finalize} from 'rxjs/operators';
import {DonorDataType} from '../../../../typings/dataTypes';
import {UserDetails} from '../../../../typings/form-data';
import api from '../../../api';
import useDistrict from '../../../hoc/useDistrict';
import useDivision from '../../../hoc/useDivision';
import useThana from '../../../hoc/useThana';
import {doOnSubscribe} from '../../../utils/rxjs-utils';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {width} from '../../../utils/handy';
import {icons} from '../../../assets/icons';
import {bloodGroup, genderList} from '../../../utils/blood';
import ModernDatePicker from '../../../component/datePicker';
const ProfileScreen = (props: any) => {
  const [done, setdone] = useState(false);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setdone(!done);
          }}>
          {done === false ? (
            <Image source={icons.edit} style={{width: 30, height: 30}} />
          ) : (
            <Image source={icons.done} style={{width: 30, height: 30}} />
          )}
        </TouchableOpacity>
      ),
    });
  }, [props.navigation, done]);
  const [loading, setLoading] = useState(false);
  const [donorData, setDonorData] = useState<DonorDataType | any>(null);

  let {divisionLoading, divisions} = useDivision();
  let [division, setDivisions] = React.useState<number>(0);
  const {districtLoading, districts} = useDistrict(division);
  let [district, setDistrict] = React.useState<number>(0);
  let {thanaLoading, thanas} = useThana(district);

  const initialValues: UserDetails = {
    name: donorData?.name,
    email: donorData?.email ? donorData?.email : '',
    blood_group: donorData?.donor_detail.blood_group,
    birth_date: donorData?.donor_detail.birth_date,
    NID_number: donorData?.donor_detail.NID_number,
    gender: donorData?.donor_detail.gender,
    latitude: donorData?.donor_detail.latitude,
    longitude: donorData?.donor_detail.longitude,
    address: donorData?.donor_detail.address,
    division_id: parseInt(donorData?.donor_detail.division_id),
    district_id: parseInt(donorData?.donor_detail.district_id),
    upazila_id: parseInt(donorData?.donor_detail.upazila_id),
  };

  useEffect(() => {
      DonorDetail();
  }, []);
  const DonorDetail = () => {
    console.log('useeffect');
    api.auth
      .DonorDetailsRequest$()
      .pipe(
        doOnSubscribe(() => setLoading(true)),
        finalize(() => setLoading(false)),
      )

      .subscribe({
        next: res => {
          console.log('res', res);
          setDonorData(res);
          setDivisions(parseInt(res?.donor_detail.division_id));
          setDistrict(parseInt(res?.donor_detail.district_id));
          //   setdone(false)
        },
        error: err => {},
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
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: values => {
      //  console.log(values);
      api.auth
        .userDetailsRequest$(values)
        .pipe(
          doOnSubscribe(() => setLoading(true)),
          finalize(() => setLoading(false)),
        )
        .subscribe({
          next: response => {
            console.log('Result', response.data);
            setDonorData(response.data.data);
            setdone(false);
          },
          error: error => {
            console.log(error);
            Alert.alert('Donor Info', 'Something Wrong.');
          },
        });
    },
  });

  console.log('fromik', width);
  // console.log('init', districts, thanas, division, district, initialValues);
  if (!donorData)
    return (
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <ActivityIndicator size={'large'} />
      </Box>
    );
  return done ? (
    <ScrollView style={{padding: 15}}>
      <Box
        flexDirection={'row'}
        justifyContent="space-between"
        alignItems={'center'}
        bg={'white'}
        rounded="sm"
        padding={2}>
        <Box>
          <FormControl
            isRequired
            isInvalid={formik.errors.division_id && formik.touched.division_id}>
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

      <Box marginTop={4} bg={'white'} rounded="sm" padding={2}>
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
      <Box marginTop={4} bg={'white'} rounded="sm" padding={2}>
        <Text fontFamily={'Montserrat-SemiBold'} marginBottom={1}>
          Address:
        </Text>
        <Box padding={2} flexDirection="row">
          <Image source={icons.pin} alt="loc" style={{width: 20, height: 20}} />
          <Text fontFamily={'Montserrat-SemiBold'}>
            {formik.values.address}
          </Text>
        </Box>
      </Box>
      <Box marginTop={4}  bg={'white'}
        rounded="sm"
        padding={2}>
        <FormControl isRequired>
          <FormControl.Label
            _text={{fontFamily: 'Montserrat-SemiBold'}}
            marginBottom={1}>
            Gender
          </FormControl.Label>
          <Select
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
      <Box marginTop={4}  bg={'white'}
        rounded="sm"
        padding={2}>
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
      <Box marginTop={4}  bg={'white'}
        rounded="sm"
        padding={2}>
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
      <Box marginTop={4}  bg={'white'}
        rounded="sm"
        padding={2}>
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
      <Box marginTop={4}  bg={'white'}
        rounded="sm"
        padding={2}>
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
      <Box marginTop={4}  bg={'white'}
        rounded="sm"
        padding={2}>
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

      <Box marginBottom={5} >
        <Button
          _text={{fontFamily: 'Montserrat-SemiBold'}}
          isLoading={divisionLoading || loading}
          isLoadingText="Requesting"
          mt={5}
          onPress={formik.handleSubmit}>
          UPDATE INFORMATION
        </Button>
      </Box>
    </ScrollView>
  ) : (
    <ScrollView>
      <Box m={5}>
        <Box bg={'white'} rounded="md" p={2}>
          <Box marginLeft={6}>
            <Text
              maxWidth={220}
              fontFamily={'Montserrat-Bold'}
              underline={true}
              fontSize={18}>
              Location :
            </Text>
          </Box>

          <Box marginLeft={10}>
            <Text
              maxWidth={220}
              fontFamily={'Montserrat-SemiBold'}
              fontSize={15}>
              Division:{' '}
              {
                divisions.find(item => item.id === formik.values.division_id)
                  ?.name_en
              }
            </Text>
            <Text
              maxWidth={220}
              fontFamily={'Montserrat-Regular'}
              fontSize={15}>
              District:{' '}
              {
                districts.find(item => item.id === formik.values.district_id)
                  ?.name_en
              }
            </Text>
            <Text
              maxWidth={220}
              fontFamily={'Montserrat-Regular'}
              fontSize={15}>
              Thana:{' '}
              {
                thanas.find(item => item.id === formik.values.upazila_id)
                  ?.name_en
              }
            </Text>
          </Box>
        </Box>
        <Box bg={'white'} rounded="md" p={2} mt={2}>
          <Box marginLeft={6}>
            <Text
              maxWidth={220}
              fontFamily={'Montserrat-Bold'}
              underline={true}
              fontSize={18}>
              Google Location :
            </Text>
          </Box>

          <Box padding={2} marginLeft={10} flexDirection="row">
            <Image
              source={icons.pin}
              alt="loc"
              style={{width: 20, height: 20}}
            />
            <Text fontFamily={'Montserrat-SemiBold'} maxWidth={width - 120}>
              {formik.values.address}
            </Text>
          </Box>
        </Box>
        <Box p={2} mt={2}>
          <Box marginLeft={6}>
            <Text
              maxWidth={220}
              fontFamily={'Montserrat-Bold'}
              underline={true}
              fontSize={18}>
              Other Info :
            </Text>
          </Box>

          <Box
            flexDirection={'row'}
            justifyContent="center"
            alignItems={'center'}>
            <Box alignSelf={'center'}>
              <Text
                fontFamily={'Montserrat-Thin'}
                color="blueGray.500"
                fontSize={150}>
                {'{'}
              </Text>
            </Box>
            <Box>
              <Box
                padding={2}
                marginLeft={6}
                flexDirection="row"
                justifyContent={'space-between'}>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    Name
                  </Text>
                </Box>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    {formik.values.name}
                  </Text>
                </Box>
              </Box>
              <Box
                padding={2}
                marginLeft={6}
                flexDirection="row"
                justifyContent={'space-between'}>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    Email
                  </Text>
                </Box>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    underline={true}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    {formik.values.email}
                  </Text>
                </Box>
              </Box>
              <Box
                padding={2}
                marginLeft={6}
                flexDirection="row"
                justifyContent={'space-between'}>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    Gender
                  </Text>
                </Box>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    underline={true}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    {formik.values.gender}
                  </Text>
                </Box>
              </Box>
              <Box
                padding={2}
                marginLeft={6}
                flexDirection="row"
                justifyContent={'space-between'}>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    Blood Group
                  </Text>
                </Box>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    {formik.values.blood_group}
                  </Text>
                </Box>
              </Box>
              <Box
                padding={2}
                marginLeft={6}
                flexDirection="row"
                justifyContent={'space-between'}>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    NID
                  </Text>
                </Box>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    {formik.values.NID_number}
                  </Text>
                </Box>
              </Box>
              <Box
                padding={2}
                marginLeft={6}
                flexDirection="row"
                justifyContent={'space-between'}>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    Birth Date
                  </Text>
                </Box>
                <Box marginLeft={6}>
                  <Text
                    maxWidth={220}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={15}>
                    {formik.values.birth_date}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default ProfileScreen;

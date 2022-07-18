import {
  Box,
  Button,
  FormControl,
  Input,
  Select,
} from 'native-base';
import * as Yup from 'yup';
import moment from 'moment';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {RequestType} from '../../../../../typings/form-data';
import {DATE_FORMAT} from '../../../../config';
import api from '../../../../api';
import {doOnSubscribe} from '../../../../utils/rxjs-utils';
import {finalize} from 'rxjs/operators';
import {Alert, ScrollView} from 'react-native';
import {bloodAmount, bloodGroup} from '../../../../utils/blood';
import ModernDatePicker from '../../../../component/datePicker';

const BloodResquestScreen = (props: any) => {


  // let {divisionLoading, divisions} = useDivision();

  // let [division, setDivisions] = React.useState<number>(divisions[0].id);
  // const {districtLoading, districts} = useDistrict(division);

  // let [district, setDistrict] = React.useState<number>(districts[0].id);
  // let {thanaLoading, thanas} = useThana(district);

  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    contact_number: Yup.string().required('Phone number is Required'),
    required_blood_group: Yup.string().required('Blood group is required'),
    amount_blood: Yup.number().test(
      'selection',
      'Blood Amount Required',
      number => number !== 0,
    ),
    blood_need_date: Yup.string(),
    reason_of_blood: Yup.string(),
    hospital_name: Yup.string().required('Hospital name is required'),
    hospital_address: Yup.string().required('Hospital address is required'),
  });

  const initialValues: RequestType = {
    name: '',
    contact_number: '',
    required_blood_group: 'A+',
    amount_blood: 1,
    blood_need_date: moment().format(DATE_FORMAT),
    reason_of_blood: '',
    hospital_name: '',
    hospital_address: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
      api.request
        .BloodRequestDataToServer$(values)
        .pipe(
          doOnSubscribe(() => setLoading(true)),
          finalize(() => setLoading(false)),
        )
        .subscribe({
          next: response => {
            console.log('Result', response.data);
          },
          error: error => {
            console.log(error);
            Alert.alert('Info', 'Something Wrong.');
          },
        });
    },
  });

  //console.log(formik.errors,formik.values);
  return (
    <Box flex={1} bg={'white'}>
      <ScrollView style={{padding: 15}}>
        <Box>
          <FormControl
            isRequired
            isInvalid={formik.errors.name && formik.touched.name}>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Name
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
          <FormControl
            isRequired
            isInvalid={
              formik.errors.contact_number && formik.touched.contact_number
            }>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Phone
            </FormControl.Label>
            <Input
              placeholder="Phone number"
              keyboardType="phone-pad"
              value={formik.values.contact_number}
              onChangeText={formik.handleChange('contact_number')}
              onBlur={formik.handleBlur('contact_number')}
            />
            <FormControl.ErrorMessage
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginLeft={1}>
              {formik.errors.contact_number}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>

        <Box marginTop={4}>
          <FormControl isRequired>
            <FormControl.Label
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginBottom={1}>
              Required Blood Group
            </FormControl.Label>
            <Select
              fontFamily={'Montserrat-Regular'}
              placeholder="Blood Group"
              selectedValue={formik.values.required_blood_group}
              onValueChange={formik.handleChange('required_blood_group')}>
              {bloodGroup.map(item => (
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
              Blood Amount (bag)
            </FormControl.Label>
            <Select
              fontFamily={'Montserrat-Regular'}
              placeholder="Gender"
              selectedValue={formik.values.amount_blood + ''}
              onValueChange={(itemValue: string) => {
                formik.setFieldValue('amount_blood', parseInt(itemValue));
              }}>
              {bloodAmount.map(item => (
                <Select.Item key={item} label={item + ''} value={item + ''} />
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box marginTop={4}>
          <FormControl isRequired>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Blood Needed Date:
            </FormControl.Label>
            <ModernDatePicker
              head={`Date of Birth`}
              date={formik.values.blood_need_date}
              getDatefromDatePicker={(date: string) =>
                formik.setFieldValue('blood_need_dat', date)
              }
              error={''}
            />
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <FormControl
            isInvalid={
              formik.errors.reason_of_blood && formik.touched.reason_of_blood
            }>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Reaseon of Blood
            </FormControl.Label>
            <Input
              type="text"
              placeholder="Why you need blood"
              multiline
              numberOfLines={2}
              value={formik.values.reason_of_blood}
              onChangeText={formik.handleChange('reason_of_blood')}
              onBlur={formik.handleBlur('reason_of_blood')}
            />
            <FormControl.ErrorMessage
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginLeft={1}>
              {formik.errors.reason_of_blood}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <FormControl
            isRequired
            isInvalid={
              formik.errors.hospital_name && formik.touched.hospital_name
            }>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Hospital Name
            </FormControl.Label>
            <Input
              type="text"
              placeholder="hospital name"
              value={formik.values.hospital_name}
              onChangeText={formik.handleChange('hospital_name')}
              onBlur={formik.handleBlur('hospital_name')}
            />
            <FormControl.ErrorMessage
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginLeft={1}>
              {formik.errors.hospital_name}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <FormControl
            isRequired
            isInvalid={
              formik.errors.hospital_address && formik.touched.hospital_address
            }>
            <FormControl.Label _text={{fontFamily: 'Montserrat-SemiBold'}}>
              Hospital Address
            </FormControl.Label>
            <Input
              type="text"
              multiline
              placeholder="Hospital Address"
              value={formik.values.hospital_address}
              onChangeText={formik.handleChange('hospital_address')}
              onBlur={formik.handleBlur('hospital_address')}
            />
            <FormControl.ErrorMessage
              _text={{fontFamily: 'Montserrat-SemiBold'}}
              marginLeft={1}>
              {formik.errors.hospital_address}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>

        <Box marginBottom={5}>
          <Button
            _text={{fontFamily: 'Montserrat-SemiBold'}}
            isLoading={loading}
            isLoadingText="Requesting"
            mt={5}
            onPress={formik.handleSubmit}>
            CONFIRM REQUEST
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default BloodResquestScreen;

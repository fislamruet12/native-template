import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../../typings/structures';
import {
  SignInData,
  SignUpConfirmData,
  SignUpData,
  UserDetails,
} from '../../../typings/form-data';
import client from '../../api/client';

const signInRequest$ = (data: SignInData): Observable<User> =>
  client
    .post<any>('login', {
      country_code: data.countryCode,
      phone_number: data.phoneNumber,
      password: data.password,
    })
    .pipe(
      map(response => {
        const responseData = response.data.message;

        const user: User = {
          id: responseData.userDetails.id,
          countryCode: '+88',
          phoneNumber: responseData.userDetails.phone_number,
          accessToken: responseData.access_token,
          name: responseData.userDetails.name,
          email: responseData.userDetails.email,
        };

        return user;
      }),
    );
const userDetailsRequest$ = (data: UserDetails): Observable<any> =>
  client.post('donor-profile-update', {
    name: data.name,
    email: data.email,
    blood_group: data.blood_group,
    birth_date: data.birth_date,
    nid_number: data.NID_number,
    gender: data.gender,
    latitude: data.latitude,
    longitude: data.longitude,
    address: data.address,
    division_id: data.division_id,
    district_id: data.district_id,
    upazila_id: data.upazila_id,
  });

const signUpRequest$ = (data: SignUpData): Observable<any> =>
  client.post('request-register-otp', {
    phone_number: data.phoneNumber,
    password: data.password,
    password_confirmation: data.confirmPassword,
  });

const signUpConfirmRequest$ = (data: SignUpConfirmData): Observable<any> =>
  client.post('confirm-registration-otp', {
    country_code: data.countryCode,
    phone_number: data.phoneNumber,
    otp: data.otp,
  });

const SignOutRequest$ = () => client.get('logout').pipe(
  map(response=>{
    console.log(response)
  })
)

export default {
  signInRequest$,
  signUpRequest$,
  signUpConfirmRequest$,
  userDetailsRequest$,
  SignOutRequest$
};

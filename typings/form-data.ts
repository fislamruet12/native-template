export type SignInData = {
  countryCode: string;
  phoneNumber: string;
  password: string;
};

export type SignUpData = {
  countryCode: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export type SignUpConfirmData = {
  countryCode: string;
  phoneNumber: string;
  otp: string;
};

export type UserDetails = {
  name: string;
  email: string;
  blood_group: string;
  birth_date: string;
  NID_number: string;
  gender:string;
  latitude: number;
  longitude: number;
  address: string;
  division_id: number;
  district_id: number;
  upazila_id: number;
};

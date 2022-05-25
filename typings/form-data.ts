
export type SignInData = {
  countryCode: string;
  phoneNumber: string;
  password: string;
};

export type SignUpData = {
  name: string;
  countryCode: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export type SignUpConfirmData = {
  countryCode: string;
  phoneNumber: string;
  otp: string;
};







/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum ROOT_NAVIGATION {
  APP = 'APP',
  AUTH = 'AUTH',
  DRAWER='DRAWER',
}

export type RootNavigationParams = {
  [ROOT_NAVIGATION.APP]: undefined;
  [ROOT_NAVIGATION.AUTH]: undefined;
};

export enum APP_NAVIGATION {
  DASHBOARD = 'DASHBOARD',
  DONORLIST='DONORLIST',
  SEARCHNDONOR='SEARCHDONOR',
  BLOODBANK='BLOODBANK',
  HELPLINE ='HLPLINE',
  VOLUNTEER='VOLUNTEER'
}

export type AppNavigationParams = {
  [APP_NAVIGATION.DASHBOARD]: undefined;
  [APP_NAVIGATION.DONORLIST]:undefined;
  [APP_NAVIGATION.SEARCHNDONOR]:undefined;
  [APP_NAVIGATION.BLOODBANK]:undefined;
  [APP_NAVIGATION.HELPLINE]:undefined;
  [APP_NAVIGATION.VOLUNTEER]:undefined;
};

export enum AUTH_NAVIGATION {
  SIGN_IN = 'SIGN_IN',
  MAP='MAP',
  PHONE='PHONE',
  OTP_CONFIRM = 'OTP_CONFIRM',
  INFO_CONFIRM = 'INFO_CONFIRM',
}

export type AuthNavigationParams = {
  [AUTH_NAVIGATION.PHONE]:undefined;
  [AUTH_NAVIGATION.SIGN_IN]: undefined;
  [AUTH_NAVIGATION.OTP_CONFIRM]: undefined;
  [AUTH_NAVIGATION.INFO_CONFIRM]:undefined;
};

export enum SEARCHDONOR_NAVIGATION{
  FILTER ='FILTER',
  SEARCHDONORLIST='SEARCHDONORLIST',
  SEARCHDONORPROFILE='SEARCHDONORPROFILE'
}

export type SearchDonorNavigationParams={
  [SEARCHDONOR_NAVIGATION.FILTER]:undefined;
  [SEARCHDONOR_NAVIGATION.SEARCHDONORLIST]:undefined;
  [SEARCHDONOR_NAVIGATION.SEARCHDONORPROFILE]:undefined;
}

export enum BLOODBANK_NAVIGATION{
  BANK='BANK',

}

export type BloodBankNavigationParams={
  [BLOODBANK_NAVIGATION.BANK]:undefined;
}

export enum DONORLIST_NAVIGATION{
     DONORLISTITEM='DONORLISTITEM'
}
export const DonorListNavigationParams={
  [DONORLIST_NAVIGATION.DONORLISTITEM]:undefined
}




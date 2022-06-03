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
}

export type AppNavigationParams = {
  [APP_NAVIGATION.DASHBOARD]: undefined;
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









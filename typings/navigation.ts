/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum ROOT_NAVIGATION {
  APP = 'APP',
  AUTH = 'AUTH',
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
  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_UP_CONFIRM = 'SIGN_UP_CONFIRM',
}

export type AuthNavigationParams = {
  [AUTH_NAVIGATION.SIGN_IN]: undefined;
  [AUTH_NAVIGATION.SIGN_UP_REQUEST]: undefined;
  [AUTH_NAVIGATION.SIGN_UP_CONFIRM]: { countryCode: string; phoneNumber: string };
};









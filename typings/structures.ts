
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable camelcase */

export type GenderType = 'Male' | 'Female' | 'Others';
export type MonthType = 'Select Month' | 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July'
| 'August' | 'September' | 'October' | 'November' | 'December';


export type MonthTypeObject = {
  id: number;
  name: MonthType;
}

export type User = {
  id: number;
  countryCode: string;
  phoneNumber: string;
  accessToken: string;
  name:string;
  email:string;
};


export type DivisionType ={
  id:number;
  name_bn:string;
  name_en:string;
}
export type DistrictType ={
  id:number;
  name_bn:string;
  name_en:string;
}

export type ThanaType ={
  id:number;
  name_bn:string;
  name_en:string;
}


export const getGenderType = (genderValue: number): GenderType => {
  if (genderValue === 1) {
    return 'Male';
  } else if (genderValue === 2) {
    return 'Female';
  } else {
    return 'Others';
  }
};



export const getMonthList = (): MonthTypeObject[] => [
  {
    id: 0,
    name: 'Select Month'
  },
  {
    id: 1,
    name: 'January'
  },
  {
    id: 2,
    name: 'February'
  },
  {
    id: 3,
    name: 'March'
  },
  {
    id: 4,
    name: 'April'
  },
  {
    id: 5,
    name: 'May'
  },
  {
    id: 6,
    name: 'June'
  },
  {
    id: 7,
    name: 'July'
  },
  {
    id: 8,
    name: 'August'
  },
  {
    id: 9,
    name: 'September'
  },
  {
    id: 10,
    name: 'October'
  },
  {
    id: 11,
    name: 'November'
  },
  {
    id: 12,
    name: 'December'
  }
];






export const getDayUnitList = (): { value: string; label: string }[] => [
  { value: 'days', label: 'Days' },
  { value: 'weeks', label: 'Weeks' },
  { value: 'months', label: 'Months' },
  { value: 'years', label: 'Years' }
];



export const getGenderTypes = (): {value: number; label: GenderType}[] => [
  { value: 1, label: 'Male' },
  { value: 2, label: 'Female' },
  { value: 3, label: 'Others' }
];

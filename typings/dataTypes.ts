import { DistrictType, DivisionType, ThanaType } from "./structures";


export type LatLong = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number
}

export type BloodBankType = {
  id: number;
  name: string;
  address: string;
  phone_number_1: string;
  phone_number_2: string;
  latitude: number;
  longitude: number;

}

export type DonorDetailType = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  blood_group: string;
  birth_date: string;
  nid_number: string;
  gender: string;
  latitude: number;
  longitude: number;
  address: string;
  division: DivisionType;
  district: DistrictType;
  upazila: ThanaType;
};

export type HelpLineType = {
  id: number;
  name: string;
  contact_number: string;
}
export type VolunteerType = {
  id: number;
  name: string;
  phone_number: string;
}

export type QueryDonorType = {
  blood_group: string;
  division_id: number;
  district_id: number;
  upazila_id: number;
}

export type DonorDataType = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  donor_detail: {
    id: number;
    blood_group: string;
    birth_date: string;
    NID_number: string;
    gender: string;
    address:string;
    latitude: number;
    longitude: number;
    division_id: number;
    district_id: number;
    upazila_id: number;
    user_id: 3;
  }
}
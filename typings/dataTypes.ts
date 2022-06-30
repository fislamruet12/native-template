import { number } from "yup"
import { DistrictType, DivisionType, ThanaType } from "./structures";


export type LatLong={
    latitude:number,
    longitude:number,
    latitudeDelta: number,
    longitudeDelta: number
}

export type BloodBankType={
    id: number;
    name: string;
    address:string;
    phone_number_1:string;
    phone_number_2:string;
    latitude:number;
    longitude:number;
 
  }

  export type DonorDetailType = {
    id:number;
    name: string;
    email: string;
    phone_number:string;
    blood_group: string;
    birth_date: string;
    nid_number: string;
    gender:string;
    latitude: number;
    longitude: number;
    address: string;
    division: DivisionType;
    district: DistrictType;
    upazila: ThanaType;
  };
  
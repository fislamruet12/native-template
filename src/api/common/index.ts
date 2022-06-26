import { DivisionType, ThanaType, DistrictType } from './../../../typings/structures';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import client from '../../api/client';


type GetDivisionListResponse = {
  success: boolean;
  message: string;
  data: Array<{
    id: number;
    name_en: string;
    name_bn: string;
  }>;
};

type GetDistrictListResponse = {
  success: boolean;
  message: string;
  data: Array<{
    id: number;
    name_en: string;
    name_bn: string;
  }>;
};

type GetThanaListResponse = {
  success: boolean;
  message: string;
  data: Array<{
    id: number;
    name_en: string;
    name_bn: string;
  }>;
};


const getDivisionList = (): Observable<Array<DivisionType>> => client.get<GetDivisionListResponse>('get-division').pipe(
  map((response) => {
    const responseData = response.data;

    const divisionList: Array<DivisionType> = responseData.data.map((divisionData) => ({
      id: divisionData.id,
      name_en: divisionData.name_en,
      name_bn: divisionData.name_bn
    }));

    return divisionList;
  })
);

const getDistrictList = (division_id: number): Observable<Array<DistrictType>> => client.get<GetDistrictListResponse>('get-district/' + division_id).pipe(
  map((response) => {
    const responseData = response.data;
    // console.log("response " ,responseData)
    const districts: Array<DistrictType> = responseData.data.map((specializationData) => ({
      id: specializationData.id,
      name_en: specializationData.name_en,
      name_bn: specializationData.name_bn
    }));

    return districts;
  })
);


const getThanaList = (district_id: number): Observable<Array<ThanaType>> => client.get<GetThanaListResponse>('get-upazila/' + district_id).pipe(
  map((response) => {
    const responseData = response.data;
    // console.log("response " ,responseData)
    const thanas: Array<ThanaType> = responseData.data.map((thanaData) => ({
      id: thanaData.id,
      name_en: thanaData.name_en,
      name_bn: thanaData.name_bn
    }));

    return thanas;
  })
);
export default { getDivisionList, getDistrictList, getThanaList };
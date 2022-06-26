import { DivisionType, ThanaType, DistrictType } from './../../../typings/structures';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import client from '../../api/client';


type GetDivisionListResponse = {
  success: boolean;
  message: string;
  data: Array<{
    id: number;
    name: string;
  }>;
};

type GetDistrictListResponse = {
  success: boolean;
  message: string;
  data: Array<{
    id: number;
    name: string;
  }>;
};

type GetThanaListResponse = {
    success: boolean;
    message: string;
    data: Array<{
      id: number;
      name: string;
    }>;
  };
  

const getDivisionList = (): Observable<Array<DivisionType>> => client.get<GetDivisionListResponse>('get-division').pipe(
  map((response) => {
    const responseData = response.data;
   
    const divisionList: Array<DivisionType> = responseData.data.map((divisionData) => ({
      id: divisionData.id,
      name_en: divisionData.name,
      name_bn:'bn'
    }));

    return divisionList;
  })
);

const getDistrictList = (division_id:number): Observable<Array<DistrictType>> => client.get<GetDistrictListResponse>('get-district/'+division_id).pipe(
  map((response) => {
    const responseData = response.data;
   // console.log("response " ,responseData)
    const districts: Array<DistrictType> = responseData.data.map((specializationData) => ({
      id: specializationData.id,
      name_en: specializationData.name,
      name_bn:'12'
    }));

    return districts;
  })
);


const getThanaList = (district_id:number): Observable<Array<ThanaType>> => client.get<GetThanaListResponse>('get-upazila/'+district_id).pipe(
    map((response) => {
      const responseData = response.data;
     // console.log("response " ,responseData)
      const thanas: Array<ThanaType> = responseData.data.map((thanaData) => ({
        id: thanaData.id,
        name_en: thanaData.name,
        name_bn:'12'
      }));
  
      return thanas;
    })
  );
export default { getDivisionList, getDistrictList,getThanaList };
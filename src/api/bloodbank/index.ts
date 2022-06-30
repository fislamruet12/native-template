import {BloodBankType} from './../../../typings/dataTypes';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import client from '../../api/client';

type GetBloodBankListResponse = {
  success: boolean;
  message: string;
  data: Array<BloodBankType>;
};

export const getBloodBank$ = (): Observable<Array<BloodBankType>> =>
  client.get<GetBloodBankListResponse>('blood-bank').pipe(
    map(response => {
      const responseData = response.data;
      const banks: Array<BloodBankType> = responseData.data.map(res => ({
        id: res.id,
        name: res.name,
        phone_number_1: res.phone_number_1,
        phone_number_2: res.phone_number_2,
        address: res.address,
        latitude: res.latitude,
        longitude: res.longitude,
      }));

      return banks;
    }),
  );

  export default {getBloodBank$}

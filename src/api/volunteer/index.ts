import {VolunteerType} from './../../../typings/dataTypes';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import client from '../../api/client';

type GetVolunteerListResponse = {
  success: boolean;
  message: string;
  data: Array<VolunteerType>;
};

export const getVolunteer$ = (): Observable<Array<VolunteerType>> =>
  client.get<GetVolunteerListResponse>('get-volunteert').pipe(
    map(response => {
      const responseData = response.data;
      console.log('req',responseData)
      const helps: Array<VolunteerType> = responseData.data.map(res => ({
        id: res.id,
        name: res.name,
        phone_number:res.phone_number,
      }));

      return helps;
    }),
  );

  export default {getVolunteer$}

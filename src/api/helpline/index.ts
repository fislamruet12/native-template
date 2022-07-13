import {HelpLineType} from './../../../typings/dataTypes';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import client from '../../api/client';

type GetHelpLineListResponse = {
  success: boolean;
  message: string;
  data: Array<HelpLineType>;
};

export const getHelpLine$ = (): Observable<Array<HelpLineType>> =>
  client.get<GetHelpLineListResponse>('get-help-line').pipe(
    map(response => {
      const responseData = response.data;
      console.log('req',responseData)
      const helps: Array<HelpLineType> = responseData.data.map(res => ({
        id: res.id,
        name: res.name,
        contact_number:res.contact_number,
      }));

      return helps;
    }),
  );

  export default {getHelpLine$}

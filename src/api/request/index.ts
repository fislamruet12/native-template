import { Observable } from "rxjs";
import { RequestType } from "../../../typings/form-data";
import client from "../client";
import { map } from 'rxjs/operators'

const BloodRequestDataToServer$ = (data: RequestType): Observable<any> =>
  client.post('blood-feed-request', {
    name: data.name,
    contact_number: data.contact_number,
    required_blood_group: data.required_blood_group,
    amount_blood: data.amount_blood,
    blood_need_date: data.blood_need_date,
    reason_of_blood: data.reason_of_blood,
    hospital_name: data.hospital_name,
    hospital_address: data.hospital_address,

  });
type GetBloodRequestResponse = {
  success: boolean;
  message: string;
  data: {
    data: Array<RequestType>
  };
};
export const BloodRequestDataFromServer$ = (): Observable<Array<RequestType>> =>
  client.get<GetBloodRequestResponse>('blood-feed-request').pipe(
    map(response => {
      const responseData = response.data.data;
      //console.log('req', responseData)
      const feeds: Array<RequestType> = responseData.data.map(res => ({
        id: res.id,
        name: res.name,
        contact_number: res.contact_number,
        required_blood_group: res.required_blood_group,
        amount_blood: res.amount_blood,
        blood_need_date: res.blood_need_date,
        reason_of_blood: res.reason_of_blood,
        hospital_name: res.hospital_name,
        hospital_address: res.hospital_address,
      }));

      return feeds;
    }),
  );

export default { BloodRequestDataToServer$,BloodRequestDataFromServer$ }
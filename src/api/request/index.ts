import { Observable } from "rxjs";
import { RequestType } from "../../../typings/form-data";
import client from "../client";

const BloodRequestDataToServer$ = (data: RequestType): Observable<any> =>
  client.post('blood-feed-request', {
    name: data.name,
    contact_number: data.contact_number,
    required_blood_group: data.required_blood_group,
    amount_blood: data.amount_blood,
    blood_need_date: data.blood_need_date,
    reason_of_blood:data.reason_of_blood,
    hospital_name: data.hospital_name,
    hospital_address:data.hospital_address,
  });
export default {BloodRequestDataToServer$}
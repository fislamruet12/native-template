import {DonorDetailType} from './../../../typings/dataTypes';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import client from '../../api/client';

const getDonorListDetails$ = (): Observable<Array<DonorDetailType>> =>
  client.get<any>('get-donor-list').pipe(
    map(response => {
      const responseData = response.data;
   //   console.log('response', responseData.data.data);
      const donorList: Array<DonorDetailType> = responseData.data.data.map(
        (item:any) => ({
          id: item.id,
          name: item.name,
          email: item.email,
          phone_number: item.phone_number,
          blood_group: item.donor_detail.blood_group,
          birth_date: item.donor_detail.birth_date,
          nid_number: item.donor_detail.NID_number,
          gender: item.donor_detail.gender,
          latitude: item.donor_detail.latitude,
          longitude: item.donor_detail.longitude,
          address: item.donor_detail.address,
          division: item.donor_detail.division,
          district: item.donor_detail.district,
          upazila: item.donor_detail.upazila,
        }),
      );
      return donorList;
    }),
  );

export default {getDonorListDetails$};

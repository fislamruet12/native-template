import { useEffect, useState } from 'react';
import { finalize } from 'rxjs/operators';

import { DistrictType } from '../../typings/structures';
import api from '../api';
import { doOnSubscribe } from '../utils/rxjs-utils';
import { store } from '../state';

const useDistrict = (division_id:any) => {
  //  console.log(division_id)
  const [districts, setdistricts] = useState<Array<DistrictType>>([
    {
      id: 0,
      name_en: 'Select District',
      name_bn:'bn'
    }
  ]);
  const [districtLoading, setDistrictLoading] = useState(false);

  useEffect(() => {
   
      api.common
        .getDistrictList(division_id)
        .pipe(
          doOnSubscribe(() => setDistrictLoading(true)),
          finalize(() => setDistrictLoading(false))
        )
        .subscribe({
          next: (districtData) => {
            setdistricts([
              {
                id: 0,
                name_en: 'Select District',
                name_bn:'bn'
              },
              ...districtData
            ]);
          },
          error: (error) => console.log(error)
        });
    
  }, [setdistricts,division_id]);

  return {
    districtLoading,
    districts
  };
};

export default  useDistrict;
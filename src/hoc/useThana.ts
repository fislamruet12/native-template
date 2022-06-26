import { useEffect, useState } from 'react';
import { finalize } from 'rxjs/operators';

import { ThanaType } from '../../typings/structures';
import api from '../api';
import { doOnSubscribe } from '../utils/rxjs-utils';

const useThana = (district_id:any) => {
  //  console.log(division_id)
  const [thanas, usethanas] = useState<Array<ThanaType>>([
    {
      id: 0,
      name_en: 'Select Thana',
      name_bn:'bn'
    }
  ]);
  const [thanaLoading, setThanaLoading] = useState(false);

  useEffect(() => {
    console.log(district_id)
      api.common
        .getThanaList(district_id)
        .pipe(
          doOnSubscribe(() => setThanaLoading(true)),
          finalize(() => setThanaLoading(false))
        )
        .subscribe({
          next: (thanaData) => {
            usethanas([
              {
                id: 0,
                name_en: 'Select Thana',
                name_bn:'bn'
              },
              ...thanaData
            ]);
          },
          error: (error) => console.log(error)
        });
    
  }, [usethanas,district_id]);

  return {
    thanaLoading,
    thanas
  };
};

export default useThana;
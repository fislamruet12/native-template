import { useEffect, useState } from 'react';
import { finalize } from 'rxjs/operators';

import { DivisionType } from '../../typings/structures';
import api from '../api';
import { doOnSubscribe } from '../utils/rxjs-utils';
import { store } from '../state';

const useDivision = () => {
  const [divisions, setdivisions] = useState<Array<DivisionType>>([
    {
      id: 0,
      name_en: 'Select Division',
      name_bn:'bn'
    }
  ]);
  const [divisionLoading, setDivisionLoading] = useState(false);

  useEffect(() => {
   
      api.common
        .getDivisionList()
        .pipe(
          doOnSubscribe(() => setDivisionLoading(true)),
          finalize(() => setDivisionLoading(false))
        )
        .subscribe({
          next: (divisionData) => {
            setdivisions([
              {
                id: 0,
                name_en: 'Select Division',
                name_bn:'bn'
              },
              ...divisionData
            ]);
          },
          error: (error) => console.log(error)
        });
    
  }, [setdivisions]);

  return {
    divisionLoading,
    divisions
  };
};

export default useDivision;
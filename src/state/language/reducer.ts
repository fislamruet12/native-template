import produce from 'immer';
import * as Types from './actionTypes';
import { LanType } from '../../../typings/structures';

export type State = {
  lan: LanType | null;
};

export const initialState: State = {
  lan: {language:2}
};

export default (state: State = initialState, action: Types.UserActionTypes) =>
  produce(state, (draft: State) => {
    switch (action.type) {
      case Types.SAVE_LAN:
        draft.lan = action.payload;
        break;
      case Types.REMOVE_LAN:
        draft.lan = null;
        break;
    }
  });

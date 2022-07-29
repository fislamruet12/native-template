import * as Types from './actionTypes';
import { LanType, User } from '../../../typings/structures';

const saveLan = (lan: LanType): Types.SaveLan => ({
  type: Types.SAVE_LAN,
  payload: lan
});

const removeLan = (): Types.RemoveLan => ({
  type: Types.REMOVE_LAN
});

export default { saveLan, removeLan };

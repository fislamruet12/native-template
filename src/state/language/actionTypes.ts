import { LanType, User } from '../../../typings/structures';

export const SAVE_LAN = 'LANSAVE';
export const REMOVE_LAN = 'LANREMOVE';

export interface SaveLan {
  type: typeof SAVE_LAN;
  payload: LanType;
}

export interface RemoveLan {
  type: typeof REMOVE_LAN;
}

export type UserActionTypes = SaveLan | RemoveLan;

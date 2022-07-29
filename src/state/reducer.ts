import { AnyAction, combineReducers } from 'redux';
import currentUser, { State as UserState, initialState as currentUserInitialState } from '../state/user/reducer';
import currentLanguage, { State as LanguageState, initialState as currentLanInitialState } from '../state/language/reducer';

import { LOG_OUT } from '../state/actions';

export interface RootState {
  currentUser: UserState;
  currentLanguage:LanguageState;
}

const appReducer = combineReducers({
  currentUser,
  currentLanguage,
});

const rootReducer = (state: RootState, action: AnyAction) => {
  if (action.type === LOG_OUT) {
    console.log('Logging Out');
    return appReducer(
      {
        ...state,
        currentUser: currentUserInitialState,
        currentLanguage:currentLanInitialState
      },
      action
    );
  }

  return appReducer(state, action);
};

export default rootReducer;

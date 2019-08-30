import { combineReducers } from 'redux';

import { reducer as userReducer } from './user';
import { reducer as meetupsReducer } from './meetups';

export default combineReducers({
  user: userReducer,
  meetups: meetupsReducer,
});

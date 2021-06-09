import { combineReducers } from 'redux';

import sessionerrorsReducer from './session_errors_reducer'
import houseerrorsReducer from './house_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionerrorsReducer,
  house: houseerrorsReducer,
});

export default errorsReducer;
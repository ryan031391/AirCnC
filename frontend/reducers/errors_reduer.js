import { combineReducers } from 'redux';

import sessionerrorsReducer from './session_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionerrorsReducer,
});

export default errorsReducer;
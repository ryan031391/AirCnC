import { combineReducers } from 'redux';

import sessionerrorsReducer from './session_errors_reducer'
import reviewerrorsReducer from './reviews_errors_reducer'
import rentalerrorsReducer from './rental_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionerrorsReducer,
  review: reviewerrorsReducer,
  rental: rentalerrorsReducer,
});

export default errorsReducer;
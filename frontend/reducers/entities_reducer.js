import { combineReducers } from 'redux';

// import housesReducer from './houses_reducer';
// import reviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
//   houses: housesReducer,
//   reviews: reviewsReducer,
  users: usersReducer,
});
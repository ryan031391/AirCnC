import { combineReducers } from 'redux';

import housesReducer from './houses_reducer';
// import reviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  houses: housesReducer,
//   reviews: reviewsReducer,
  users: usersReducer,
});

export default entitiesReducer;
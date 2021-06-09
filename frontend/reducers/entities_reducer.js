import { combineReducers } from 'redux';

import housesReducer from './houses_reducer';
import reviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer';
import rentalReducer from './rental_reducer'

const entitiesReducer = combineReducers({
  houses: housesReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  rentals: rentalReducer,
});

export default entitiesReducer;
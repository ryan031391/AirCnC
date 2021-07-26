import { combineReducers } from 'redux';

import housesReducer from './houses_reducer';
import reviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer';
import rentalReducer from './rental_reducer';
import renterReducer from './renter_reducer';
import reservationReducer from './reservations_reducer';

const entitiesReducer = combineReducers({
  houses: housesReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  rentals: rentalReducer,
  renters: renterReducer,
  reservations: reservationReducer,
});

export default entitiesReducer;
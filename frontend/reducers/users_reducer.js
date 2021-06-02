import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_REVIEW, RECEIVE_HOUSE } from '../actions/house_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:

    default:
      return state;
  }
};

export default usersReducer;
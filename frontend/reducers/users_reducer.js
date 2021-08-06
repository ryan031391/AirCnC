import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_REVIEW, RECEIVE_HOUSE } from '../actions/house_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.currentUser.session_token] = action.currentUser;
      return nextState;
    case RECEIVE_REVIEW:
      nextState[action.author.id] = action.author;
      return nextState;
    case RECEIVE_HOUSE:
      return Object.assign({}, state, action.authors);
    case LOGOUT_CURRENT_USER:
      return {};

    default:
      return state;
  }
};

export default usersReducer;
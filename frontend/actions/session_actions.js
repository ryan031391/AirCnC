import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const recieveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})


export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(
            user => dispatch(recieveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
            )
        
)

export const fetchUser = userId => dispatch => (
    APIUtil.fetch(userId)
    .then(
        user => dispatch(recieveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
        )
)

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(
            user => dispatch(recieveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
            )
)

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(user => dispatch(logoutCurrentUser()))
)

export const guestLogin = user => dispatch =>(
    APIUtil.signup(user)
        .then(
            user => dispatch(recieveCurrentUser(user))
        )
)

export const guestLogout = userId => dispatch => (
    APIUtil.remove(userId)
        .then(() => dispatch(logoutCurrentUser()))
)
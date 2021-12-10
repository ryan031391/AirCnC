import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import GuestLogin from './guest_login'

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(null, mapDispatchToProps)(GuestLogin)
import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
    formType: 'SignUp'
})

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
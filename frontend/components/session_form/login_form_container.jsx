import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
    formType: 'LogIn'
})

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
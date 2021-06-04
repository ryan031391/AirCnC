import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import {openModal, closeModal} from '../../actions/modal_actions'

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'LogIn'
})

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
          Signup
        </button>
      ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
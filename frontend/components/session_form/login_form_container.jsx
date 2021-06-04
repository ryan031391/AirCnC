import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import {openModal, closeModal} from '../../actions/modal_actions'

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'LogIn'
})

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
          Signup
        </button>
      ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
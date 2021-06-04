import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import {openModal, closeModal} from '../../actions/modal_actions'


const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'SignUp'
})

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={(e) => {
          e.preventDefault();
          dispatch(openModal('login'))
        }}>
          Login
        </button>
      ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
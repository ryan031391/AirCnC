import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import { guestLogin } from '../../actions/session_actions';
import GuestLoginContainer from '../session_form/guest_login_container';

// function Modal({modal, closeModal}) {
//   if (!modal) {
//     return null;
//   }
//   let component;
//   switch (modal) {
//     case 'login':
//       component = <LoginFormContainer />;
//       break;
//     case 'signup':
//       component = <SignupFormContainer />;
//       break;
//     default:
//       return null;
//   }
//   return (
//     <div className="modal-background" onClick={closeModal}>
//       <div className="modal-child" onClick={e => e.stopPropagation()}>
//         { component }
//       </div>
//     </div>
//   );
// }

class Modal extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {modal, closeModal} = this.props;
    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      // case 'guest login':
      //   component = <GuestLoginContainer/>;
      //   break;

      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
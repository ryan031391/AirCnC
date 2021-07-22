import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { deleteRental } from '../../actions/house_actions'
import Welcome from './welcome';
import {openModal} from '../../actions/modal_actions'

const mSTP = ({ session, entities}) =>({
    currentUser: entities.users[session.session_token]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    deleteRental: house_id => dispatch(deleteRental(house_id))
})

export default connect(mSTP, mDTP)(Welcome);
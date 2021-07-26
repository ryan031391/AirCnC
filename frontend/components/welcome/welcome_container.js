import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { deleteRental, fetchRental } from '../../actions/house_actions'
import Welcome from './welcome';
import {openModal} from '../../actions/modal_actions'
import {selectReservations} from '../../reducers/selectors'

const mSTP = ({ session, entities}) => {
    const reservations = selectReservations(entities)
    return {
        currentUser: entities.users[session.session_token],
        reservations
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    deleteRental: house_id => dispatch(deleteRental(house_id)),
    fetchRental: () => dispatch(fetchRental())
})

export default connect(mSTP, mDTP)(Welcome);
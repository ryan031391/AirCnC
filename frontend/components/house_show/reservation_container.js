import { connect } from 'react-redux';
import { createRental } from '../../actions/house_actions';
import Reservation from './reservation';

const mSTP = state => ({
    errors: state.errors.rental,
    rentals: state.entities.rentals
})

const mDTP = dispatch => ({
    createRental: rental => dispatch(createRental(rental)),
})

export default connect(mSTP, mDTP)(Reservation);
import { connect } from 'react-redux';
import { createRental } from '../../actions/house_actions';
import Reservation from './reservation';

const mSTP = state => ({
    errors: state.errors.rental,
})

const mDTP = dispatch => ({
    createRental: rental => dispatch(createRental(rental)),
})

export default connect(mSTP, mDTP)(Reservation);
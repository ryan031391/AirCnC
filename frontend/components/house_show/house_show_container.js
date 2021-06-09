import { connect } from 'react-redux'; 
import { fetchHouse } from '../../actions/house_actions';
import { selectReviewsForHouse, selectHouse, selectRentalsForHouse } from '../../reducers/selectors';
import HouseShow from './house_show';

const mSTP = (state, ownProps) => {
    const HouseId = parseInt(ownProps.match.params.houseId);
    const house = selectHouse(state.entities, HouseId);
    const reviews = selectReviewsForHouse(state.entities, house);
    const rentals = selectRentalsForHouse(state.entities, house)
    return {
        HouseId,
        house,
        reviews,
        rentals
    }
}

const mDTP = dispatch => ({
    fetchHouse: houseId => dispatch(fetchHouse(houseId)),
})

export default connect(mSTP, mDTP)(HouseShow);
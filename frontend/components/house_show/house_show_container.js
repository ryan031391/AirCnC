import { connect } from 'react-redux'; 
import { fetchHouse } from '../../actions/house_actions';
import { selectReviewsForHouse, selectHouse } from '../../reducers/selectors';
import HouseShow from './house_show';

const mSTP = (state, ownProps) => {
    const HouseId = parseInt(ownProps.match.params.houseId);
    const house = selectHouse(state.entities, HouseId);
    const reviews = selectReviewsForHouse(state.entities, house);
    return {
        HouseId,
        house,
        reviews
    }
}

const mDTP = dispatch => ({
    fetchHouse: houseId => dispatch(fetchHouse(houseId)),
})

export default connect(mSTP, mDTP)(HouseShow);
import { connect } from 'react-redux'; 
import { fetchHouse } from '../../actions/house_actions';
import { selectReviewsForHouse, selectHouse, selectRentalsForHouse } from '../../reducers/selectors';
import HouseShow from './house_show';

// const mSTP = ({ session, entities}) =>({
//     currentUser: entities.users[session.session_token]
// })

const mSTP = (state, ownProps) => {
    console.log(ownProps)
    const HouseId = parseInt(ownProps.match.params.houseId);
    const house = selectHouse(state.entities, HouseId);
    const reviews = selectReviewsForHouse(state.entities, house);
    const rentals = selectRentalsForHouse(state.entities, house);
    // const renters = selectRentersForHouse(state.entities, house);
    const renters = state.entities.renters ? Object.values(state.entities.renters) : [];
    return {
        currentUser: state.entities.users[state.session.session_token],
        HouseId,
        house,
        reviews,
        rentals,
        // renters: rentals.map(rental => (
        //     state.entities.users[rental.user_id]
        // )),
        renters,
        searchParams: ownProps.location.state,
    }
}

const mDTP = dispatch => ({
    fetchHouse: houseId => dispatch(fetchHouse(houseId)),
})

export default connect(mSTP, mDTP)(HouseShow);
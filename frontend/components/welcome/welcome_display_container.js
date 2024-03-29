import { connect } from "react-redux";
import { selectHouses } from "../../reducers/selectors";
import { fetchHouses, fetchLocationInBound } from "../../actions/house_actions";
import WelcomeDisplay from './welcome_display'

const mSTP = state => ({
    houses: selectHouses(state.entities),
})

const mDTP = dispatch => ({
    fetchHouses: () => dispatch(fetchHouses()),
    fetchLocation: ({location, bound}) => dispatch(fetchLocationInBound(location, bound))
})

export default connect(mSTP, mDTP)(WelcomeDisplay);
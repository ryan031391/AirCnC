import { connect } from 'react-redux';
import { selectHouses } from '../../reducers/selectors';
import { fetchHouses } from '../../actions/house_actions'
import Search from './search';

const mSTP = state => ({
    houses: selectHouses(state.entities),
});

const mDTP = dispatch => ({
    fetchHouses: () => dispatch(fetchHouses()),
})

export default connect(mSTP, mDTP)(Search);
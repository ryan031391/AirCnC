import { connect } from 'react-redux';
import { fetchUser, logout } from '../../actions/session_actions';
import User from './user';

const mSTP = ({entities, session}) => ({
    currentUser: entities.users[session.session_token]
})

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(User);
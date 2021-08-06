import { connect } from 'react-redux'
import {logout} from '../actions/session_actions'
import Logout from './logout'

const mSTP = ({session}) => {
    let bool = ""
    if (session.session_token) {
        console.log("1")
        bool = true;
    } else {
        console.log("2")
        bool = false
    }
    return {
        bool: bool
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Logout)
import { connect } from 'react-redux';
import { createReview } from '../../actions/house_actions';
import ReviewForm from './review_form';

const mSTP = state => ({
    errors: state.errors.house,
});

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
});

export default connect(mSTP, mDTP)(ReviewForm)
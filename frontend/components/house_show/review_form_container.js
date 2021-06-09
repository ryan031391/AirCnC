import { connect } from 'react-redux';
import { createReview } from '../../actions/house_actions';
import ReviewForm from './review_form';

// const mSTP = ownProps => ({
//     houseId: parseInt(ownProps.match.params.houseId)
// });

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
});

export default connect(mDTP)(ReviewForm)
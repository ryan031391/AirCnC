import React from 'react';
import { connect } from 'react-redux';
import ReviewItem from './review_item';

const mSTP = ({ entities }, {review}) => ({
    author: entities.users[review.user_id]
});

export default connect(mSTP)(ReviewItem)
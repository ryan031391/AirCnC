import React from 'react';

class ReviewItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {author, review} = this.props;
        return(
            <li>
                User {author.username} -
                <br/>
                Rating: {review.score}
                <br/>
                Comment: "{review.body}"
            </li>
        )
    }
}

export default ReviewItem;
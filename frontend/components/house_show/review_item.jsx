import React from 'react';

class ReviewItem extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props)
    }

    render(){
        const {author, review} = this.props;
        
        return(
            <div>
                <li id="review-list">
                    {author.username} said: &nbsp; 
                        <b>"{review.body}"</b>
                </li>
                <br/>
            </div>
            
        )
    }
}

export default ReviewItem;
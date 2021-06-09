import React from 'react';
import ReviewItemContainer from './review_item_container';

class HouseShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchHouse(this.props.HouseId)
    }

    render(){
        const {house, reviews} = this.props;
        let sum = 0;
        let num = 0;
        reviews.map(review => num += 1)
        reviews.map(review => sum += review.score)
        return(
            <div>
                <h1>Hi Banana!</h1>
                <h2>House Info:</h2>
                <ul>
                    <li>Rating: {(sum/num).toFixed(2)}</li>
                    <li>Description: {house.description}</li>
                    <li>Location: {house.location} </li>
                </ul>
                <h2>Reviews: </h2>

                {reviews.map(review => (
                    <ReviewItemContainer key={review.id} review={review}/>
                ))}

            </div>
        )
    }
}

export default HouseShow;
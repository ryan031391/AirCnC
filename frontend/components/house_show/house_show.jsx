import React from 'react';
import ReviewItemContainer from './review_item_container';
import ReviewFormContainer from './review_form_container';

class HouseShow extends React.Component{
    constructor(props){
        super(props);
        this.reviewForm = this.reviewForm.bind(this);
    }

    componentDidMount(){
        this.props.fetchHouse(this.props.HouseId)
    }

    reviewForm(){
        let temp = false
        let today = new Date()

        this.props.renters.forEach(renter => {
            if (this.props.currentUser.username === renter.username ) {
                // return (
                //     <ReviewFormContainer />
                // )
                let temp_1 = new Date(this.props.rentals.find(ele => ele.user_id === renter.id).check_out)
                if (temp_1 < today) temp = true;
            }
        })

        if (temp) return(
            <ReviewFormContainer />
        ) 
    }

    render(){
        console.log(this.props)
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
                {this.reviewForm()}
            </div>
        )
    }
}

export default HouseShow;
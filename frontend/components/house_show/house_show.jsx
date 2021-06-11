import React from 'react';
import ReviewItemContainer from './review_item_container';
import ReviewFormContainer from './review_form_container';
import ReservationContainer from './reservation_container';

class HouseShow extends React.Component{
    constructor(props){
        super(props);
        this.today = new Date();    
        this.reviewForm = this.reviewForm.bind(this);
    }

    componentDidMount(){
        this.props.fetchHouse(this.props.HouseId)
    }

    reviewForm(houseId){
        let temp = false
        if (this.props.rentals.length !==0 && this.props.renters.lenth !== 0) {
            this.props.renters.forEach(renter => {
                if (this.props.currentUser.username === renter.username ) {
                    let temp_1 = new Date(this.props.rentals.find(ele => ele.user_id === renter.id).check_out)
                    if (temp_1 < this.today) temp = true;
                }
            })
        }

        if (temp) return(
            <ReviewFormContainer houseId={houseId}/>
        ) 
    }

    render(){
        const {house, reviews} = this.props;
        let sum = 0;
        let num = 0;
        reviews.map(review => num += 1)
        reviews.map(review => sum += review.score)
        let rating = (sum/num).toFixed(2)
        if (rating === 'NaN') {rating = "No review yet"}
        console.log(rating === 'NaN')
        return(
            <div id="showpage">
                <h1></h1>
                <h2>House Information:</h2>
                <ul id="infolist">
                    <li>Location: {house.location} </li>
                    <li>Price: {house.price} / night</li>
                    <li>Rating: {rating}</li>
                    <li>Description: {house.description}</li>
                </ul>

                <h2>Make a reservation now!</h2>
                
                <ReservationContainer today={this.today} houseId={this.props.match.params.houseId} />
                

                <h2 id="review">Reviews: </h2>
                <ul>
                    {reviews.map(review => (
                        <ReviewItemContainer key={review.id} review={review}/>
                    ))}
                </ul>
                {this.reviewForm(this.props.match.params.houseId)}
            </div>
        )
    }
}

export default HouseShow;
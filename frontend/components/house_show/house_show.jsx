import React from 'react';
import ReviewItemContainer from './review_item_container';
import ReviewFormContainer from './review_form_container';
import ReservationContainer from './reservation_container';
import DayPicker from 'react-day-picker';

// import '../../../node_modules/react-day-picker/lib/style.css';
// import Calendar from "react-calendar";

class HouseShow extends React.Component{
    constructor(props){
        super(props);
        this.today = new Date();    
        this.reviewForm = this.reviewForm.bind(this);
        this.getDisabledDays = this.getDisabledDays.bind(this)
        
        this.houseimage = ""
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

    getDisabledDays(){
        let result = [];
        this.props.rentals.forEach(({check_in, check_out}) => {
            result.push({
            after: new Date(new Date(check_in).getFullYear(),
                            new Date(check_in).getMonth(),
                            new Date(check_in).getDate()),
            before: new Date(new Date(check_out).getFullYear(),
                            new Date(check_out).getMonth(),
                            new Date(check_out).getDate()+2)
            })
        })
        return result
        // {
        //   after: new Date(2017, 3, 20),
        //   before: new Date(2017, 3, 25),
        // },
    }

    render(){
        // console.log(this.props.match.params.houseId)
        const {house, reviews} = this.props;
        let sum = 0;
        let num = 0;
        reviews.map(review => num += 1)
        reviews.map(review => sum += review.score)
        let rating = (sum/num).toFixed(2)
        if (rating === 'NaN') {rating = "No review yet"}
        return(
            <div id="showpage">
                <div >
                    <img className="houseshow-top-img" src={window.backgroundUrl} />
                </div>
                <div className="house-info">
                    <div>
                        <h2>House Information:<br/></h2>
                        
                        <ul id="infolist">
                            <li><h3>Location: {house.location} </h3></li>
                            <li><h3>Price: {house.price} / night</h3></li>
                            <li><h3>Rating: {rating}</h3></li>
                            <li><h3>Description: {house.description}</h3></li>
                        </ul>
                    </div>
                    <div className="house-img">
                        <img src={`https://ryan-aircnc-dev-pub.s3.us-west-1.amazonaws.com/house_${this.props.match.params.houseId}.jpg`} alt="image"/>
                    </div>
                    {/* <div className="date-div"> */}
                        <div className="reservation">
                            <h2 >Make a reservation now!</h2>
                            
                            <ReservationContainer today={this.today} houseId={this.props.match.params.houseId} />
                        </div>
                        <div >
                            {/* <Calendar
                                onChange={this.showAvailability()}
                                onChange={(date) => this.setState({ date })}
                                value={this.state.date}
                                maxDate={new Date()}
                            /> */}
                            <DayPicker
                                initialMonth={new Date(this.today.getFullYear(), this.today.getMonth())}
                                disabledDays={
                                    this.getDisabledDays()
                                }
                            />
                        </div>
                    {/* </div> */}
                </div>

                <h2 id="review">Reviews: </h2>
                <ul>
                    {reviews.map(review => (
                        <ReviewItemContainer key={review.id} review={review}/>
                    ))}
                </ul>
                {this.reviewForm(this.props.match.params.houseId)}
                {/* <div className="house-sticky-image-wrapper">
                    <img className="house-bot-img" src={window.backgroundUrl} />
                </div> */}
            </div>
        )
    }
}

export default HouseShow;
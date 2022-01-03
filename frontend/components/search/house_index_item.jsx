import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class HouseIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.inputParams = this.inputParams.bind(this)
    }

    inputParams(){
        const newTO = {
            pathname: `/houses/${this.props.house.id}`,
            state: this.props.searchParams,
        }
        return newTO
    }

    render(){
        const {house} = this.props
        // const house_num = parseInt(house.id) + 105; // heroku v.
        const house_num = parseInt(house.id); // github v.
        return(
            <li id={`house-${house.id}`}>
                <Link className="house-item-link" to={this.inputParams}> 
                    <img className='search-img' src={`https://ryan-aircnc-dev-pub.s3.us-west-1.amazonaws.com/house-${house_num}/1.jpg`} alt="image" width="700" height="100%"/>
                    {/* <label id="houseitem">location: {house.location}&nbsp;&nbsp;&nbsp;{house.price}/night</label> */}
                    <div className="grid-body">
                        <h4 className="house-index-left">{house.location}</h4>
                        <h4 className="house-index-right">{house.price}</h4>
                    </div>
                    <br/>
                    <br/>
                </Link>
            </li>
        )
    }
}

export default HouseIndexItem;
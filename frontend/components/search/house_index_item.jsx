import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class HouseIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {house} = this.props
        return(
            <Link to={`/api/${house.id}`}>
                <li id={`house-${house.id}`}>
                    <label>Price: {house.price}/day</label>
                    <br/>
                    <label>location: {house.location}</label>
                </li>
            </Link>
        )
    }
}

export default HouseIndexItem;
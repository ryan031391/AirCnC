import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class HouseIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {house} = this.props
        return(
            <li id={`house-${house.id}`}>
                <Link id="house-item-link" to={`/houses/${house.id}`}> 
                    <label id="houseitem">location: {house.location}&nbsp;&nbsp;&nbsp;{house.price}/night</label>
                    <br/>
                    <br/>
                </Link>
            </li>
        )
    }
}

export default HouseIndexItem;
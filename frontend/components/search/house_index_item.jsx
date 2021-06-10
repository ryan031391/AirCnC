import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class HouseIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {house} = this.props
        return(
            <Link to={`/houses/${house.id}`}>
                <li id={`house-${house.id}`}>
                    <label id="houseitem">location: {house.location}&nbsp;&nbsp;&nbsp;{house.price}/night</label>
                    <br/>
                    <br/>
                </li>
            </Link>
        )
    }
}

export default HouseIndexItem;
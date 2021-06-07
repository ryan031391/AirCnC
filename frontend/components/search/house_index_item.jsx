import React from 'react';
import { withRouter } from 'react-router-dom';

class HouseIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {house} = this.props
        return(
            <li>
                <label>Price: {house.price}</label>
                <br/>
                <label>location: {house.latitude}, {house.longitude}</label>
            </li>
        )
    }
}

export default HouseIndexItem;
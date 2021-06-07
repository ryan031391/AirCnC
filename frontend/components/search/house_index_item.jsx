import React from 'react';
import { withRouter } from 'react-router-dom';

class HouseIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <li>
                <label>Price: {this.props.price}</label>
                <label>location: {this.props.latitude}, {this.props.longitude}</label>
            </li>
        )
    }
}

export default HouseIndexItem;
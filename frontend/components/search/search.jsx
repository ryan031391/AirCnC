import React from 'react';
import HouseIndex from './house_index';

class Search extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchHouses();
    }

    render(){
        return(
            <div>
                <input type="text" value="input here" />
                <HouseIndex houses={this.props.houses} />
            </div>
        )
    }
}

export default Search;
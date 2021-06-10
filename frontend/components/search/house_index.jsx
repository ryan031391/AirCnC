import React from 'react';
import HouseIndexItem from './house_index_item'

class HouseIndex extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="result">
                <h1 id="houses">Houses: </h1>
                <ul id="house-list">
                    {this.props.houses.map(house => (
                        <HouseIndexItem key={house.id} house={house}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default HouseIndex
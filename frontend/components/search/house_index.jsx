import React from 'react';
import HouseIndexItem from './house_index_item'

class HouseIndex extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Houses: </h1>
                {this.props.houses.map(house => (
                    <HouseIndexItem key={house.id} house={house}/>
                ))}
            </div>
        )
    }
}

export default HouseIndex
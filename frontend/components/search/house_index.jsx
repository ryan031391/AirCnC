import React from 'react';
import HouseIndexItem from './house_index_item';
import HouseMap from './house_map';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";



class HouseIndex extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="result">
                {/* <h1 id="houses">Houses: </h1> */}
                <ul className="grid-container">
                    <div className="grid-header">
                        <h2 className="grid-item-left">Location</h2>
                        <h2 className="grid-item-right">Price ($/per night)</h2>
                    </div>
                    {this.props.houses.map(house => (
                        <HouseIndexItem key={house.id} house={house}/>
                    ))}
                </ul>
                <div className="map">
                    <HouseMap houses={this.props.houses} />
                </div>
                {/* <Wrapper apiKey={"AIzaSyAZsmOMc3VUofOxE2fbhDv6JrQGwlPY_Bk"} render={render}>
                    <Map />
                </Wrapper> */}
            </div>
        )
    }
}

export default HouseIndex
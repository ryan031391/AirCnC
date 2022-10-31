import React from "react";
import WelcomeHouseIndexItem from "../search/welcome_house_index_item";

class WelcomeDisplay extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            location: "San Francisco",
            bound: "10",           
        }
        // console.log(this.state)
    }

    componentDidMount(){
        this.props.fetchLocation(this.state)
    }

    render(){
        if (this.state.entities === null) {
            return null
        } else {
            var arr = []
            this.props.houses.forEach(element => {
                if (arr.length < 9) {
                    arr.push(element)
                }
            });
            console.log(arr)
            if (arr.empty === []) {
                return null
            } else {
                return (
                    <div className="welcome-result">
                        <ul className="welcome-page-grid-container">
                            {arr.map(house => (
                                <WelcomeHouseIndexItem key={house.id} house={house} searchParams={this.state}/>
                            ))}
                        </ul>
                    </div>
                )
            }
        }
    }

}

export default WelcomeDisplay
import React from "react";

class WelcomeDisplay extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            location: "San Francisco",
            bound: "10",           
        }
    }

    componentDidMount(){
        this.props.fetchLocation(this.state)
        // console.log(state)
    }

}

export default WelcomeDisplay
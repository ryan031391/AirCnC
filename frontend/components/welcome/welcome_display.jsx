import React from "react";

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
            console.log(this.state)
            return null
        }
    }

}

export default WelcomeDisplay
import React from 'react'

class Logout extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.bool) {
            return(
                <button className="Nav-logout" onClick={() => this.props.logout()}>Log Out</button>
            )
        } else {
            return null;
        }    
    }
}

export default Logout
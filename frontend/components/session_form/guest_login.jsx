import React from 'react';

class GuestLogin extends React.Component{
    constructor(props){
        super(props)
        const num = Math.floor(Math.random()*100000000)
        this.state = {
            username: `guest${num}`,
            password: `${num}`
        }
        this.guestSubmit = this.guestSubmit.bind(this)
    }

    guestSubmit(e){
        e.preventDefault()
        this.props.signup(this.state)        
    }

    render(){
        return(
            <div id="guest">
                <button onClick={this.guestSubmit}>Guest Login</button>
            </div>
        )
    }
}

export default GuestLogin;
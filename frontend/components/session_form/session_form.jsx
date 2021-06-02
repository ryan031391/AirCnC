import React from 'react';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateUsername(e){
        this.setState({username: e.currentTarget.value})
    }

    updatePassword(e){
        this.setState({password: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state)
    }

    render(){
        return(
            <div>
                <h1>Sign Up To Be A Member Of AirCnC!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: 
                        <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.updateUsername}
                        />
                    </label>
                    <label>Password: 
                        <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.updatePassword}
                        />
                    </label>
                    <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;
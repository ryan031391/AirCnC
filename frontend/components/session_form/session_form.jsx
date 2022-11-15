import React from 'react';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        const num = Math.floor(Math.random()*100000000)
        this.guestState = {
            username: `guest${num}`,
            password: `${num}`
        }
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.guestSubmit = this.guestSubmit.bind(this)
    }

    updateUsername(e){
        this.setState({username: e.currentTarget.value})
    }

    updatePassword(e){
        this.setState({password: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)
            // .then(this.props.closeModal())
            .then(() => {
                if (this.props.errors.session) {}
                else { this.props.closeModal() }
            })
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    }

    handleKey(e){
        // e.preventDefault()
        if (e.key === 'Enter') {
            this.handleSubmit(e)
        }
    }

    guestSubmit(e){
        e.preventDefault();

        this.props.signup(this.guestState)
            .then(this.props.closeModal())
    }

    handleGuest(){

        if (this.props.formType === 'Login') {
            return(
                <button onClick={this.guestSubmit}>Guest Login</button>
            )
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div id="change">
                        Please {this.props.formType} or {this.props.otherForm}
                    </div>
                    
                    {this.renderErrors()}
                    <label className="username-input">Username: &nbsp;&nbsp;
                        <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.updateUsername}
                        onKeyDown={this.handleKey}
                        />
                    </label>
                    <br/>
                    
                    <label className="input">Password: &nbsp;&nbsp;
                        <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.updatePassword}
                        onKeyDown={this.handleKey}
                        />
                    </label>
                    <button id="signin">{this.props.formType}</button>
                    <br/>
                    <br/>
                    <div id="guest">
                        {this.handleGuest()}    
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;
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

    handleGuest(){
        const guestSubmit = state => {
            this.props.signup(state)
                .then(this.props.closeModal())
        }

        if (this.props.formType === 'LogIn') {
            return(
                <button onClick={() => guestSubmit(this.guestState)}>Guest Login</button>
            )
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Please {this.props.formType} or {this.props.otherForm}
                    {this.renderErrors()}
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
                    <br/>
                    {this.handleGuest()}
                </form>
            </div>
        )
    }
}

export default SessionForm;
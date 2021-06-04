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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
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
                </form>
            </div>
        )
    }
}

export default SessionForm;
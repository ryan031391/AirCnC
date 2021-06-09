import React from 'react';
import { Link } from 'react-router-dom';

class User extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.fetchUser(this.props.match.params.userId)
    // }

    render(){
        // console.log(this.props)
        return(
        <div>
            <h1>Welcome, {this.props.currentUser.username}</h1>
            <button onClick={this.props.logout}>Log out</button>
        </div>
        )
    }
}

export default User;
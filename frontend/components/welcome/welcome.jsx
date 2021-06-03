import React from 'react'

const Welcome = (props) => {
    const not_logged_in = () => (
        <div>
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign Up!</Link>
        </div>
    );

    const logged_in = () => (
        <div>
            <h1>Welcome, {props.currentUser.username}</h1>
            <button onClick={props.logout}>Log out</button>
        </div>
    );

    return currentUser ? logged_in() : not_logged_in();
}

export default Welcome;
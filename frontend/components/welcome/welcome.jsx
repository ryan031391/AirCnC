import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = ({currentUser, logout, openModal}) => {
    const not_logged_in = () => (
        <nav id="Welcome">
                <h1>Welcome to AirCnC</h1>
            <button onClick={() => openModal('login')}>Login</button>
            &nbsp;or&nbsp;
            <button onClick={() => openModal('signup')}>SignUp</button>
        </nav>
    );

    const logged_in = () => (
        <div>
            <h1>Hi, {currentUser.username}</h1>
            <button onClick={logout}>Log out</button>
        </div>
    );

    return currentUser ? logged_in() : not_logged_in();
    // return not_logged_in();
}

export default Welcome;
import React from 'react'
import { Link } from 'react-router-dom'
import SearchContainer from '../search/search_container'

const Welcome = ({currentUser, logout, openModal}) => {
    // console.log(currentUser);

    const not_logged_in = () => (
        <div id="Welcome">
                <h1>Welcome to AirCnC</h1>
            <button id="welcomebutton" onClick={() => openModal('login')}>&nbsp;Login&nbsp;</button>
            <br/><br/>
            <button id="welcomebutton" onClick={() => openModal('signup')}>SignUp</button>
        </div>
    );

    const logged_in = () => (
        <div id="welcomepage" >
            <h1>Hi, {currentUser.username}</h1>
            <button onClick={logout}>Log out</button>
            <div id="search">
                <SearchContainer />
            </div>
        </div>
    );

    return currentUser ? logged_in() : not_logged_in();
    // return not_logged_in();
}

export default Welcome;
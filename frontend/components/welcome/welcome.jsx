import React from 'react'
import { Link } from 'react-router-dom'
import {selectHouses} from '../../reducers/selectors'
import SearchContainer from '../search/search_container'

const Welcome = ({currentUser, logout, openModal}) => {
    

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
            {displayHouses()}
            {/* <h2>Your upcoming events: {currentUser.rentals.foreach(ele => {return ele})}</h2> */}
            <button onClick={logout}>Log out</button>
            <div id="search">
                <SearchContainer />
            </div>
        </div>
    );

    const displayNum = (arr) => {
        let n = 0
        for (let i = 0; i < arr.length; i++) {
            n += 1
        }
        return n
    }

    const displayHouses = () => {
        if (currentUser.rentals) {
            return (
                <h2>Your have {displayNum(Object.values(currentUser.rentals))} upcoming events: {
                    Object.values(currentUser.rentals).map(ele => (
                        <div key={ele.id}>
                            <h2>{ele.location}&nbsp;&nbsp;{ele.check_in}-{ele.check_out}</h2>
                            <br/>
                        </div>
                    ))
                }</h2>
            )
        }
    }

    return currentUser ? logged_in() : not_logged_in();
    // return not_logged_in();
}

export default Welcome;
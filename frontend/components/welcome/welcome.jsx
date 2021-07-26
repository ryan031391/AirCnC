import React from 'react'
import { Link } from 'react-router-dom'
import { remove } from '../../util/session_api_util'
import SearchContainer from '../search/search_container'
import DisplayReservation from './display'

const Welcome = ({currentUser, reservations, logout, openModal, deleteRental, fetchRental}) => {
    

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
            <DisplayReservation rentals={reservations} deleteRental={deleteRental} fetchRental={fetchRental}/>
            {/* {displayHouses()} */}
            {/* <h2>Your upcoming events: {currentUser.rentals.foreach(ele => {return ele})}</h2> */}
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
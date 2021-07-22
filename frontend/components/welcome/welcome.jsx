import React from 'react'
import { Link } from 'react-router-dom'
import {selectHouses} from '../../reducers/selectors'
import { remove } from '../../util/session_api_util'
import SearchContainer from '../search/search_container'

const Welcome = ({currentUser, logout, openModal, deleteRental}) => {
    

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

    const handleDelete = (ele) => {
        console.log(ele)
        deleteRental(ele)
    }

    const displayHouses = () => {
        if (currentUser.rentals) {
            let temp = []
            let today = new Date()
            Object.values(currentUser.rentals).forEach(ele => {
                if (new Date(ele.check_in) > today) {
                    temp.push(ele)
                }
            })
            return (
                <h2>Your have {displayNum(temp)} upcoming events: {
                    temp.map(ele => (
                        <form key={ele.id} onSubmit={handleDelete(ele.id)}>
                            <h2>{ele.location}&nbsp;&nbsp;from&nbsp;{ele.check_in.replace("T00:00:00.000Z", "")}&nbsp; to &nbsp;{ele.check_out.replace("T00:00:00.000Z", "")}</h2>
                            &nbsp;
                            <button type="submit">Cancel</button>
                            <br/>
                        </form>
                    ))
                }</h2>
            )
        }
    }

    return currentUser ? logged_in() : not_logged_in();
    // return not_logged_in();
}

export default Welcome;
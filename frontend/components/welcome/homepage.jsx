import React from 'react'
import SearchContainer from '../search/search_container'
import DisplayReservation from './display'

class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: true,
            reservation: false,
            select_search: "select_search",
            select_reser: "", 
        }
        this.showSerch = this.showSerch.bind(this)
        this.showReservation = this.showReservation.bind(this)
        this.showContent = this.showContent.bind(this)
    }

    showSerch(){
        this.setState({
            search: true,
            reservation: false,
            select_search: "select_search",
            select_reser: "", 
        })
    }

    showReservation(){
        this.setState({
            search: false,
            reservation: true,
            select_search: "",
            select_reser: "select_reser", 
        })
    }

    showContent(){
        if (this.state.search === true) {
            return <SearchContainer />
        } else {
            return <DisplayReservation rentals={this.props.rentals} deleteRental={this.props.deleteRental} fetchRental={this.props.fetchRental}/>
        }
    }

    render(){
        return(
            <div className='homepage-selection'>
                <text className='home-nav-1' id={this.state.select_search} onClick={() => this.showSerch()}>Places to stay</text>
                <text className='home-nav-2' id={this.state.select_reser} onClick={() => this.showReservation()}>Show my reservations</text>
                {this.showContent()}
            </div>
        )
    }

}

export default Homepage
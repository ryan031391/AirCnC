import React from 'react'
import SearchContainer from '../search/search_container'
import DisplayReservation from './display'

class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: true,
            reservation: false,
        }
        this.showSerch = this.showSerch.bind(this)
        this.showReservation = this.showReservation.bind(this)
        this.showContent = this.showContent.bind(this)
    }

    showSerch(){
        this.setState({
            search: true,
            reservation: false, 
        })
    }

    showReservation(){
        this.setState({
            search: false,
            reservation: true,
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
                <button onClick={() => this.showSerch()}>Places to stay</button>
                <button onClick={() => this.showReservation()}>Show my reservations</button>
                {this.showContent()}
            </div>
        )
    }

}

export default Homepage
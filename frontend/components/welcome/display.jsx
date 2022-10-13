import React from 'react'

class DisplayReservation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            house_id: "",
            showup: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.popup = this.popup.bind(this)
        this.deleteFunction = this.deleteFunction.bind(this)
    }

    componentDidMount(){
        this.props.fetchRental()
    }

    componentDidUpdate(){
        
    }

    displayNum (arr){
        let n = 0
        for (let i = 0; i < arr.length; i++) {
            n += 1
        }
        return n
    }

    handleClick(e){
        e.preventDefault();
        this.setState({
            house_id: e.currentTarget.value,
            showup: true
        })
    }

    popup(){
        if (!this.state.showup){
            return null
        } else {
            return(
                <div className="pop-up">
                <div className="pop-up-content">
                    <h3>Cancel Confirm?</h3>
                    <div className="pop-up-button">
                    <button
                        className="yes"
                        style={{ width: "100px" }}
                        onClick={this.deleteFunction}
                    >
                        Yes
                    </button>

                    <button
                        onClick={() => this.setState({ showup: false })}
                        style={{ width: "100px" }}
                    >
                        No
                    </button>
                    </div>
                </div>
                </div>
            );
        }    
    }

    deleteFunction(e){
        e.preventDefault();
        this.props.deleteRental(this.state.house_id)
        this.setState({ showup: false })
        this.props.fetchRental()

    }

    //     showSerch(){
    //     this.setState({
    //         search: true,
    //         reservation: false,
    //         select_search: "select_search",
    //         select_reser: "", 
    //     })
    // }

    // showReservation(){
    //     this.setState({
    //         search: false,
    //         reservation: true,
    //         select_search: "",
    //         select_reser: "select_reser", 
    //     })
    // }

    // showContent(){
    //     if (this.state.search === true) {
    //         return <SearchContainer />
    //     } else {
    //         return <DisplayReservation rentals={this.props.rentals} deleteRental={this.props.deleteRental} fetchRental={this.props.fetchRental}/>
    //     }
    // }

    // render(){
    //     return(
    //         <div className='homepage-selection'>
    //             <text className='home-nav-1' id={this.state.select_search} onClick={() => this.showSerch()}>Places to stay</text>
    //             <text className='home-nav-2' id={this.state.select_reser} onClick={() => this.showReservation()}>Show my reservations</text>
    //             {this.showContent()}
    //         </div>
    //     )
    // }

    render(){
        if (this.props.rentals.length !== 0) {
            let temp = []
            let today = new Date()
            today.setDate(today.getDate() - 2);
            this.props.rentals.forEach(ele => {
                if (new Date(ele.check_in) >= today) {
                    temp.push(ele)
                }
            })
            return(
                <div className="show-reservation">
                    {this.popup()}
                    <h2>Your have {this.displayNum(temp)} upcoming events: 
                        <div>
                            {
                                
                                temp.map(ele => (
                                    <div className="mainpage-reservation" key={ele.id}>
                                        <h6 className="mainpage-reservation-font">{ele.location} <br/> {ele.check_in.replace("T00:00:00.000Z", "")}&nbsp; to &nbsp;{ele.check_out.replace("T00:00:00.000Z", "")}</h6>
                                        &nbsp;
                                        <button value={ele.id} onClick={this.handleClick}>Cancel</button>
                                        <br/>
                                    </div>
                                ))
                                
                            }
                        </div>
                    </h2>
                </div>
            )
        } else {
            return(
                <h2>You don't have any Reservation yet!</h2>
            )
        }
    }
}

export default DisplayReservation
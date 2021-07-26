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
            console.log("POPUP!!!!")
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
    }

    render(){
        if (this.props.rentals) {
            let temp = []
            let today = new Date()
            this.props.rentals.forEach(ele => {
                if (new Date(ele.check_in) >= today) {
                    temp.push(ele)
                }
            })
            console.log(temp)
            return(
                <div>
                    {this.popup()}
                    <h2>Your have {this.displayNum(temp)} upcoming events: {
                        temp.map(ele => (
                            <div key={ele.id}>
                                <h2>{ele.location}&nbsp;&nbsp;from&nbsp;{ele.check_in.replace("T00:00:00.000Z", "")}&nbsp; to &nbsp;{ele.check_out.replace("T00:00:00.000Z", "")}</h2>
                                &nbsp;
                                <button value={ele.id} onClick={this.handleClick}>Cancel</button>
                                <br/>
                            </div>
                        ))
                    }</h2>
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
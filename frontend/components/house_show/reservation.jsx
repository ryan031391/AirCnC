import React from 'react';

class Reservation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            house_id: props.houseId,
            check_in_month: '',
            check_in_day: '',
            check_in_year: '',
            check_out_month: '',
            check_out_day: '',
            check_out_year: '',
        }
        this.addLeadingZero = this.addLeadingZero.bind(this);
        this.updateCheckin = this.updateCheckin.bind(this);
    }

    addLeadingZero(str){
        if (str < 10) return "0" + str;
        else return str;
    }

    renderMonth(){
        for (let i = this.props.today.getMonth()+2; i < 13; i++) {
            return (
                <option value={i}>
                    {this.addLeadingZero(i)}
                </option>
            )
        }
    }

    updateCheckin(ele){
        let temp = "check_in_" + ele;
        return e => this.setState({
            [temp]: e.currentTarget.value
        })
    }

    render(){
        const {today} = this.props;
        return(
            <div>
                <b>Check In Date: &nbsp; &nbsp; </b> 
                
                <select id="checkinlistmonth" onChange={this.updateCheckin("month")}>
                    <option value={`${today.getMonth()+1}`}>
                         {this.addLeadingZero(today.getMonth()+1)} 
                    </option>
                    {this.renderMonth()}
                </select> / 
                <select id="checkinlistdate">
                    <option> {this.addLeadingZero(today.getDate())} </option>
                </select> / 
                <select id="checkinlistyear">
                    <option> {today.getFullYear()} </option>
                </select> 

                <br/>

                <b>Check Out Date: &nbsp; </b> 
                <select id="checkoutlistmonth">
                    <option> {this.addLeadingZero(today.getMonth()+1)} </option>
                </select> / 
                <select id="checkoutlistdate">
                    <option> {this.addLeadingZero(today.getDate()+1)} </option>
                </select> / 
                <select id="checkoutlistyear">
                    <option> {today.getFullYear()} </option>
                </select> 
            </div>
        )
    }
}

export default Reservation;
import React from 'react';

class Reservation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            check_in_month: props.today.getMonth()+1,
            check_in_day: props.today.getDate(),
            check_in_year: props.today.getFullYear(),
            check_out_month: props.today.getMonth()+1,
            check_out_day: props.today.getDate(),
            check_out_year: props.today.getFullYear(),
        }
        this.addLeadingZero = this.addLeadingZero.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    addLeadingZero(str){
        if (str < 10) return "0" + str;
        else return str;
    }

    renderMonth(ele){
        const { today } = this.props;
        let numMonth = [];
        let tempYear = this.state.check_in_year;
        if (ele !== 'check_in') {
            tempYear = this.state.check_out_year
        }
        if (parseInt(tempYear) === today.getFullYear()) {
            for (let i = today.getMonth()+1; i < 13; i++) {
                numMonth.push(this.addLeadingZero(i))
            }
        } else {
            for (let i = 1; i < 13; i++) {
                numMonth.push(this.addLeadingZero(i))
            }
        }
        return(
            <select onChange={this.update(`${ele}_month`)}>
                {numMonth.map(i => (
                    <option 
                    value={i}
                    onClick={() => this.renderDate(ele)}
                    key={`{month-${i}}`}
                    >{i}</option>
                ))}
            </select>
        )
    }

    renderDate(ele){        
        const { today } = this.props;
        let tempMonth = this.state.check_in_month;
        let tempYear = this.state.check_in_year;
        if (ele !== 'check_in') {
            tempYear = this.state.check_out_year;
            tempMonth = this.state.check_out_month;
        }
        let numDate = []
        if (parseInt(tempYear) === today.getFullYear()) {
            if (parseInt(tempMonth) <= today.getMonth()+1){
                for (let i = today.getDate(); i < this.dayOfMonth(today.getMonth())+1; i++) {
                    numDate.push(i)
                }
            } else {
                for (let i = 1; i < this.dayOfMonth(tempMonth)+1; i++) {
                    numDate.push(i)
                }
            }
        } else {
            for (let i = 1; i < this.dayOfMonth(tempMonth)+1; i++) {
                numDate.push(i)
            }
        }
        return(
            <select onChange={this.update(`${ele}_day`)}>
                {numDate.map(i => (
                    <option key={`{day-${i}}`} value={i}>{this.addLeadingZero(i)}</option>
                ))}
            </select>
        )
    }

    dayOfMonth(month){
        let large = [0, 2, 4, 6, 7, 9, 11];
        let small = [3, 5, 8, 10];
        if (large.includes(month)) {
            return 31;
        } else if (small.includes(month)) {
            return 30;
        } else if (this.props.today.getFullYear()%4 === 0) {
            return 29;
        } else {
            return 28;
        }
    }

    renderYear(ele){
        const { today } = this.props;

        let numYear = []
        for (let i = today.getFullYear(); i < 2100; i++) {
            numYear.push(i)
        }

        return(
            <select onChange={this.update(`${ele}_year`)}>
                {numYear.map(i => (
                    <option 
                    key={`{year-${i}}`} 
                    value={i}
                    // onClick={() => this.renderMonth(ele)}
                    // onClick={() => this.renderDate(ele)}
                    >{i}</option>
                ))}
            </select>
        )
    }

    update(ele){
        return e => this.setState({
            [ele]: e.currentTarget.value
        })
    }

    handleSubmit(e){
        // e.preventDefault();
        let tempState = {
            house_id: this.props.houseId,
            check_in: `${this.addLeadingZero(this.state.check_in_month)} ${this.addLeadingZero(this.state.check_in_day)} ${this.state.check_in_year}`,
            check_out: `${this.addLeadingZero(this.state.check_out_month)} ${this.addLeadingZero(this.state.check_out_day)} ${this.state.check_out_year}`,
        }
        this.props.createRental(tempState);
    }

    render(){
        // console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <b>Check In Date: &nbsp; &nbsp; </b>
                {this.renderYear('check_in')} &nbsp; / &nbsp;     
                {this.renderMonth('check_in')} &nbsp; / &nbsp;
                {this.renderDate('check_in')} 
                

                <br/>

                <b>Check Out Date: &nbsp; </b>
                {this.renderYear('check_out')} &nbsp; / &nbsp;
                {this.renderMonth('check_out')} &nbsp; / &nbsp;
                {this.renderDate('check_out')} 
                
                <br/>

                <button type="submit">Confirm</button>
            </form>
        )
    }
}

export default Reservation;
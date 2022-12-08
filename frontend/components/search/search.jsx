import React from 'react';
import HouseIndex from './house_index';
import { withRouter, Link } from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            location: "",
            bound: "5",
        }
        // console.log(this.props)
        this.updateLocation = this.updateLocation.bind(this);
        this.updateBound = this.updateBound.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showHouses = this.showHouses.bind(this);
        this.inputParams = this.inputParams.bind(this)
    }

    showHouses(){
        if (this.props.houses.length !== 0){
            return <HouseIndex houses={this.props.houses} />
        }
    }

    handleSubmit(e){
        e.preventDefault();
        // const temp = this.state.location.split(" ").join("")
        // this.setState({location: `${temp}`})
        this.props.fetchLocation(this.state)
            .then(() => this.inputParams)
    }

    updateLocation(e){
        this.setState({location: e.currentTarget.value})
    }

    updateBound(e){
        this.setState({bound: e.currentTarget.value})
    }

    inputParams(){
        const temp = {
            location: this.state.location,
            bound: this.state.bound,
        }
        if (this.state.location === "") {
            temp.location = "san francisco"
        }
        const newTO = {
            pathname: `/${temp.location} ${temp.bound}`,
            params: this.state
        }
        return newTO
    }

    render(){
        
        return(
            <div className='search-div'>
                {/* <form onSubmit={this.handleSubmit} className="search-bar"> */}
                    <div className="homepage-search-box">
                        <div className="location">
                            <b>LOCATION: </b>
                                <input 
                                className="input-location"
                                type="text"
                                placeholder="San Francisco" 
                                value={this.state.location} 
                                onChange={this.updateLocation}
                                required
                                />
                        </div>
                        <br/>
                        <div className="bound">  
                            <b> BOUND: <br /></b>  
                            <select className="input-bound" id="myList" onChange={this.updateBound} required>   
                                <option selected value="5"> 5 miles </option>  
                                <option value="10"> 10 miles </option>  
                                <option value="20"> 20 miles </option>  
                                <option value="50"> 50 miles </option>  
                            </select>     
                        </div>



                        <div className='search-button-div'>
                            <Link className="search-button" to={this.inputParams()}>
                                <svg className='mainpage-svg' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"> {/* style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;" */}
                                    <g fill="none">
                                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                                    </g>   
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <br/>
                    {/* <button className="search-button" type="submit">Search</button> */}
                    {/* <input 
                    type="text" 
                    value={this.state.bound} 
                    onChange={this.updateBound}
                    /> */}
                {/* </form> */}
                {/* {this.showHouses()} */}
                {/* <HouseIndex houses={this.props.houses} /> */}
            </div>
        )
    }
}

export default Search;
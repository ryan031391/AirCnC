import React from 'react';
import HouseIndex from './house_index';
import { withRouter, Link } from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            location: "San Francisco",
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

    inputParams(location, bound){
        const newTO = {
            pathname: `/${location} ${bound}`,
            params: this.state
        }
        return newTO
    }

    render(){
        return(
            <div className='search-div'>
                {/* <form onSubmit={this.handleSubmit} className="search-bar"> */}
                    <div className="search-box">
                        <div className="location">
                            <b>Location: </b>
                                <input 
                                className="input-location"
                                type="text"
                                placeholder="Please type in San Francisco" 
                                value={this.state.location} 
                                onChange={this.updateLocation}
                                required
                                />
                        </div>
                        <br/>
                        <div className="bound">  
                            <b> Bound: </b>  
                            <select className="input-bound" id="myList" onChange={this.updateBound} required>  
                                <option> choose bound </option>  
                                <option value="5"> 5 miles </option>  
                                <option value="10"> 10 miles </option>  
                                <option value="20"> 20 miles </option>  
                                <option value="50"> 50 miles </option>  
                            </select>     
                        </div>
                        <div className='search-button-div'>
                            <Link className="search-button" to={this.inputParams(this.state.location, this.state.bound)}>
                                Search
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
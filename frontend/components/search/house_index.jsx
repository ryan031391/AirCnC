import React from 'react';
import HouseIndexItem from './house_index_item';
import HouseMap from './house_map';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

class HouseIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            location: "",
            bound: "5",
        }
        this.updateLocation = this.updateLocation.bind(this);
        this.updateBound = this.updateBound.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchBar = this.searchBar.bind(this)
        this.destruct = this.destruct.bind(this)
    }

    destruct(){
        let name = (this.props.location.pathname).split(" ")
        name[0] = name[0].split("").slice(1, name[0].split("").length).join("")
        let distance = name[name.length-1]
        name = name.slice(0, name.length - 1).join(" ")   
        let data = {
            location: name,
            bound: distance,
        }
        return data
    }

    componentDidMount(){
        // console.log(data)
        this.props.fetchLocation(this.destruct())
        // this.props.fetchLocation(this.props.location.params)
        // console.log(this.props)
    }

    searchBar(){
        return(
            <div className='new-page-search' >
                <form onSubmit={this.handleSubmit} className="search-bar">
                    <div className="search-box">
                        <div className="location">
                            <b>Location: <br /></b>
                                <input 
                                className="input-location"
                                type="text"
                                placeholder="San Francisco"
                                value={this.state.location} 
                                onChange={this.updateLocation}
                                />
                        </div>
                        <br/>
                        <div className="bound">  
                            <b> Bound: <br /></b>  
                            <select className="input-bound" id="myList" onChange={this.updateBound} >   
                                <option selected value="5"> 5 miles </option>  
                                <option value="10"> 10 miles </option>  
                                <option value="20"> 20 miles </option>  
                                <option value="50"> 50 miles </option>  
                            </select>     
                        </div>
                        <div className='search-button-div-2'>
                            {/* <button className="search-button" type="submit">Search</button> */}
                            
                            {/* <div class="search-svg" data-icon="true" data-testid="little-search-icon"> */}
                                <button className="search-button" type="submit">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"> {/* style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;" */}
                                        <g fill="none">
                                            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                                        </g>   
                                    </svg>
                                </button>
                            {/* </div> */}
                        </div>
                    </div>
                    
                    {/* <input 
                    type="text" 
                    value={this.state.bound} 
                    onChange={this.updateBound}
                    /> */}
                </form>
                {/* {this.showHouses()} */}
                {/* <HouseIndex houses={this.props.houses} /> */}
            </div>
        )
    }

    updateLocation(e){
        this.setState({location: e.currentTarget.value})
    }

    updateBound(e){
        this.setState({bound: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();        
        const temp = {
            location: this.state.location,
            bound: this.state.bound,
        }
        if (this.state.location === "") {
            temp.location = "san francisco"
        }
        this.props.fetchLocation(temp)
    }


    render(){
        if (this.props.houses.length !== 0) {
            return(
                <div >
                    <div className='search-div'>
                        {this.searchBar()}
                    </div>
                    <div className="result-map">
                        <div className="result">
                            {/* <div className="grid-header">
                                <h2 className="grid-item-left">Location</h2>
                                <h2 className="grid-item-right">Price ($/per night)</h2>
                            </div> */}
                            {/* <h1 id="houses">Houses: </h1> */}
                            <div className="house-count">{this.props.houses.length} results</div>
                            <ul className="grid-container">

                                {this.props.houses.map(house => (
                                    <HouseIndexItem key={house.id} house={house} searchParams={this.destruct()}/>
                                ))}
                            </ul>
                            {/* <Wrapper apiKey={"AIzaSyAZsmOMc3VUofOxE2fbhDv6JrQGwlPY_Bk"} render={render}>
                                <Map />
                            </Wrapper> */}
                        </div>
                        <div className="map">
                            <HouseMap houses={this.props.houses} />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    {this.searchBar()}
                </div>
            )
        }
    }
}

export default HouseIndex
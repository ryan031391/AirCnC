import React from 'react';
import HouseIndex from './house_index';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            location: '',
            bound: '',
        }
        this.updateLocation = this.updateLocation.bind(this);
        this.updateBound = this.updateBound.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showHouses = this.showHouses.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchHouses();
    // }
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
    }

    updateLocation(e){
        this.setState({location: e.currentTarget.value})
    }

    updateBound(e){
        this.setState({bound: e.currentTarget.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <b>Location: </b>
                        <input 
                        type="text" 
                        value={this.state.location} 
                        onChange={this.updateLocation}
                        />
                    <div>  
                        <b> Bound: </b>  
                        <select id="myList" onChange={this.updateBound} >  
                            <option> ---Choose Bound--- </option>  
                            <option value="5"> 5 miles </option>  
                            <option value="10"> 10 miles </option>  
                            <option value="20"> 20 miles </option>  
                            <option value="50"> 50 miles </option>  
                        </select>     
                    </div>
                    <button type="submit">Search</button>
                    {/* <input 
                    type="text" 
                    value={this.state.bound} 
                    onChange={this.updateBound}
                    /> */}
                </form>
                {this.showHouses()}
                {/* <HouseIndex houses={this.props.houses} /> */}
            </div>
        )
    }
}

export default Search;
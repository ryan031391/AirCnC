import React from 'react';
import HouseIndex from './house_index';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            location: '',
            bound: '5',
        }
        this.updateLocation = this.updateLocation.bind(this);
        this.updateBound = this.updateBound.bind(this)
    }

    // componentDidMount(){
    //     this.props.fetchHouses();
    // }

    updateLocation(e){
        this.setState({location: e.currentTarget.value})
    }

    updateBound(e){
        this.setState({bound: e.currentTarget.value})
    }

    render(){
        return(
            <div>
                <b>Location: </b>
                    <input 
                    type="text" 
                    value={this.state.location} 
                    onChange={this.updateLocation}
                    />
                <form>  
                    <b> Bound: </b>  
                    <select id="myList" onChange={this.updateBound} >  
                        <option> ---Choose Bound--- </option>  
                        <option> 5 miles </option>  
                        <option> 10 miles </option>  
                        <option> 20 miles </option>  
                        <option> 50 miles </option>  
                    </select>     
                </form>
                <button onClick={this.handleClick}>Search</button>
                {/* <input 
                type="text" 
                value={this.state.bound} 
                onChange={this.updateBound}
                /> */}
                <HouseIndex houses={this.props.houses} />
            </div>
        )
    }
}

export default Search;
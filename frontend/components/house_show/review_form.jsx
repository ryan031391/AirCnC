import React from 'react';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            house_id: props.houseId, 
            body: '',
            score: '',
        }
        this.updateBody = this.updateBody.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    updateBody(e){
        this.setState({body: e.currentTarget.value})
    }

    updateScore(e){
        this.setState({score: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createReview(this.state)
    }

    renderErrors() {
        return(
          <ul id="review-error">
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    }

    render(){
        console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Leave your review:</h2>
                    <textarea value={this.state.body} onChange={this.updateBody} />
                <b> Score: </b>  
                <select id="myList" onChange={this.updateScore} >  
                    <option> --- Rate --- </option> 
                    <option value="5"> 5 </option>  
                    <option value="4"> 4 </option>  
                    <option value="3"> 3 </option>  
                    <option value="2"> 2 </option>  
                    <option value="1"> 1 </option>  
                </select> 
                <button type="submit">Submit</button>
                {this.renderErrors()}
            </form>
        )
    }
}

export default ReviewForm
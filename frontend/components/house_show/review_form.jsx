import React from 'react';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            house_id: props.houseId, 
            body: '',
            score: '',
            showup: false,
        }
        this.updateBody = this.updateBody.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.popup = this.popup.bind(this);
        // console.log(props)
    }

    updateBody(e){
        this.setState({body: e.currentTarget.value})
    }

    updateScore(e){
        this.setState({score: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        let data = {
            house_id: this.state.house_id, 
            body: this.state.body,
            score: this.state.score,       
        }
        if (this.props.bool) {
            this.props.createReview(data)
        } else {
            this.setState({ showup: true })
        }      
    }

    popup(){
        if (!this.state.showup){
            return null
        } else {
            return(
                <div className="pop-up">
                    <div className="pop-up-content">
                        <h3>Sorry, comment section is not available until Check out.</h3>
                        <button onClick={() => this.setState({ showup: false })}>OK</button>
                    </div>
                </div>
            );
        }    
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
        return(
            <form className="review" onSubmit={this.handleSubmit}>
                <h2 id="review-form">Leave your review here:</h2>
                    <textarea value={this.state.body} onChange={this.updateBody} />
                    &nbsp;&nbsp;
                <b> Rate: </b>  
                <select id="rating" id="reviewlist" onChange={this.updateScore} >  
                    <option> --- Rate --- </option> 
                    <option value="5"> 5 </option>  
                    <option value="4"> 4 </option>  
                    <option value="3"> 3 </option>  
                    <option value="2"> 2 </option>  
                    <option value="1"> 1 </option>  
                </select> 
                &nbsp;&nbsp;
                <button type="submit">Submit</button>
                {this.popup()}
                {this.renderErrors()}

            </form>
        )
    }
}

export default ReviewForm
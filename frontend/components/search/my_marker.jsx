import React from "react";

// const MyMarker = ({ text, tooltip, $hover }) => {
//   const handleClick = () => {
//     console.log(`You clicked on ${tooltip}`);
//   };

//   return (
//     <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
//       <span className="circleText" title={tooltip}>
//         {text}
//       </span>
//     </div>
//   );
// };

class MyMarker extends React.Component{

  constructor(props){
    super(props)
    this.state = {
        house_id: "",
        showup: false
    } 
    this.handleClick = this.handleClick.bind(this)
    this.popup = this.popup.bind(this)
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      house_id: e.currentTarget.key,
      showup: true
    })
  }

  popup(){
    if (!this.state.showup){
      return null
    } else {
      return(
        <div className="map-pop-up">
          <div className="map-pop-up-content">
            <h3>{this.props.text}</h3>
          </div>
        </div>
      )
    }
  }

  render(){
    const {$hover, tooltip, text, key} = this.props
    return (
      <div className={$hover ? "circle hover" : "circle"} onClick={this.handleClick} id={key}>
        {this.popup()}
        <span className="circleText" title={tooltip}>
          {/* {text} */} 
        </span>
      </div>
  );
  }

}

export default MyMarker;
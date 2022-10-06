import React from "react";

class PopUp extends React.Component {
  // render() {
  //   return (
  //     <div className="popup">
  //       <div className="popup_open">
  //         <button onClick={this.props.closePopup}>X</button>
  //         <h4>{this.props.text}</h4>
  //       </div>
  //     </div>
  //   )
  // }

  constructor () {
    super();
    this.state = {
      showPopup: true
    };
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup })
  }
  render() {
    return(
      <div>
        <button onClick={this.togglePopup}>Show</button>
        {
          !this.state.showPopup && (
            <p>123</p>
          )
        }
      </div>
    )
  }
}

export default PopUp

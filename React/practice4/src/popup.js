import React from "react";
import { useState } from "react";
import { ThemeContextConsumer } from "./context";

// class PopUp extends React.Component {


//   constructor () {
//     super();
//     this.state = {
//     };
//   }

//    render() {
//     return (
//         <div className="popup">
//           <div className="popup_open">
//             <button className={`${this.props.darkMode ? 'popup-btn-dark' : 'popup-btn-light'}`} onClick={this.props.closePopup}>X</button>
//             <h4 className={`${this.props.darkMode ? 'popup-txt-dark' : 'popup-txt-light'}`}>Release date: {this.props.text}</h4>
//           </div>
//         </div>
//     )
//   }
// }

const PopUp = (props) => {
  const [showPopup, setShowPopUp] = useState(true);
  

  return (
    <div className="popup">
      <div className="popup_open">
        <button className={`${props.darkMode ? 'popup-btn-dark' : 'popup-btn-light'}`} onClick={props.closePopup}>X</button>
        <h4 className={`${props.darkMode ? 'popup-txt-dark' : 'popup-txt-light'}`}>Release date: {props.text}</h4>
      </div>
    </div>
)
}

export default PopUp

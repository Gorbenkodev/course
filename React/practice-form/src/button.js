import React from "react";
import ReactDOM from "react-dom";

 export class NextButton extends React.Component {
    onclick () {
      window.location.assign('http://localhost:3000/formFirst');
    }

    render() {
      return (<button className="button-select" onClick={(e) => this.onclick(e)} >Next<i className="arrow"></i></button>);
    }
  }

export class ContButton extends React.Component {
  onclick () {
    window.location.assign('http://localhost:3000/formSecond');
  }

  render() {
    return (<button className="next-btn" onClick={(e) => this.onclick(e)}>Continue</button>);
  }
}

export class PrevButton extends React.Component {
  onclick () {
    window.history.back()
  }

  render() {
    return (<button className="prev-btn" onClick={(e) => this.onclick(e)}><i className="arrowPrev"></i>Previous</button>);
  }
}



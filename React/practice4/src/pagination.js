import React from "react";
import App from "./app";

class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      totalPages: 3,
    };
    this.perviousPage = this.perviousPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }

  perviousPage(){
    this.setState({ count: this.state.count - 1})
  }

  nextPage(){
    this.setState({ count: this.state.count + 1 });
  }

  render(props) {
    return (
      <div>
        <h4>Curent Page: {this.state.count}</h4>
        <button onClick={this.perviousPage}
        disabled={this.state.count === 1}>Previous Page</button>
        <button onClick={this.nextPage}
        disabled={this.state.count === this.state.totalPages}>Next Page</button>
      </div>
    )
  }
}

export default Pagination
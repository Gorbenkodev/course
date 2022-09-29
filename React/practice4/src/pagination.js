import React from "react";

class Pagination extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="pagination">
        <h4>Curent Page: {this.props.currentPages}</h4>
        <button onClick={this.props.perviousPage}
        disabled={this.props.currentPages === 1}>Previous Page</button>
        <button onClick={this.props.nextPage}
        disabled={this.props.currentPages === this.props.totalPages}>Next Page</button>
      </div>
    )
  }
}

export default Pagination
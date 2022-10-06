import React from "react";

class Pagination extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="pagination">
        <h4 className={`${this.props.darkMode ? 'txt-color-dark' : 'txt-color-light'}`}>Curent Page: {this.props.currentPages}</h4>
          <button className={`${this.props.darkMode ? 'pagination-btn_dark' : 'pagination-btn_light'}`} onClick={this.props.perviousPage}
        disabled={this.props.currentPages === 1}>Previous Page</button>
          <button className={`${this.props.darkMode ? 'pagination-btn_dark' : 'pagination-btn_light'}`} onClick={this.props.nextPage}
        disabled={this.props.currentPages === this.props.totalPages}>Next Page</button>
      </div>
    )
  }
}

export default Pagination
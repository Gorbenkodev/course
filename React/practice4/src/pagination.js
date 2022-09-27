import React from "react";

class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1
    }
  }

  render() {
    console.log(this.page)
    return (
      <div>
        <button className="perv" onClick={() => this.page + 1}>Pervious Page</button>
        <button className="next">Next Page</button>
      </div>
    )
  }
}

export default Pagination
import React from "react";
class RateSwith extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  this.toggleFilms = this.toggleFilms.bind(this)
  }

  toggleFilms() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return(
      <div>
        <p className="toggleFilms" onClick={this.toggleFilms}>{this.state.show ? 'Show Rate' : 'Hide Rate'}</p>
        {
          !this.state.show && (
            <p className="rateFilm">{this.props.popularity}</p>
          )
        }
      </div>
    )
  }
}

export default RateSwith
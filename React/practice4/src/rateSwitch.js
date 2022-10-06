import React from "react";
class RateSwith extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    };

  }

  toggleFilms = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return(
      <div>
        <p className="toggleFilms" onClick={this.toggleFilms}>{this.state.show ? 'Show Rate' : 'Hide Rate'}</p>
        {
          !this.state.show && (
            <p className={`${this.props.darkMode ? 'rateFilm-dark' : 'rateFilm-light'}`}>{this.props.popularity}</p>
          )
        }
      </div>
    )
  }
}

export default RateSwith
import React from "react";
import Pagination from "./pagination";
import RateSwith from "./rateSwitch";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],

    }
  }


  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=81c8e393b8ff77b6d1f9247e798d7de9&page=${this.state.page}`)
    .then (res => res.json())
    .then(console.log('Component DID MOUNT!'))
    .then(console.log(this.results))
    .then(
      (result) => {
        this.setState({
          results: result.results
        });
      },
      (error) => ({
        error
      })
    )
  }



  render() {
    const {error, results} = this.state;
    <h1>this.state.page</h1>
    if(error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div className="filmList">
          <h3 className='title'>Favorite Movies</h3>
          <Pagination/>
          <ul className="allPosters">
            {results.map(item => (
              <li className="poster" key={item.id}>
                <RateSwith popularity={item.popularity}/>
                <h3>{item.title}</h3>
                <img src={'https://image.tmdb.org/t/p/w300' + item.poster_path}></img>
                <p>{item.overview}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
  
}


export default App;
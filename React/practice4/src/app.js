import React from "react";
import Pagination from "./pagination";
import RateSwith from "./rateSwitch";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      currentPages: 1,
      totalPages: 5,
      firstLoad: true
    }
  }



  get() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=81c8e393b8ff77b6d1f9247e798d7de9&page=${this.state.currentPages}`)
    .then (res => res.json())
    .then(
      (data) => {
        this.setState({
          results: data.results
        });
      },
      (error) => ({
        error
      })
    )
  }

  componentDidMount() {
    this.get()
  }

 componentDidUpdate(prevProps, prevState){
    if (this.state.currentPages !== prevState.currentPages){
      this.get()
    }
  }

  nextPage = () => {
    this.setState({ 
      ...this,
      currentPages: this.state.currentPages + 1})
  }

  perviousPage = () => {
    this.setState({ 
      ...this,
      currentPages: this.state.currentPages - 1})
      
  }
  

  
  render() {
    const {error, results} = this.state;
    if(error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div className="filmList">
          <h3 className='title'>Favorite Movies</h3>
          <Pagination currentPages={this.state.currentPages} totalPages={this.state.totalPages} nextPage={this.nextPage} perviousPage={this.perviousPage}/>
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
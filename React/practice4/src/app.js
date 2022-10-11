import React, { useContext, useState } from "react";
import Pagination from "./pagination";
import RateSwith from "./rateSwitch";
import { ThemeButton } from "./theme/themeButton";
import { ThemeContext, ThemeContextProvider, ThemeContextConsumer} from "./context";
import PopUp from "./popup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      currentPages: 1,
      totalPages: 5,
      // darkMode: false,
      // showPopup: false,
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
  darkModeBtn = () => {
		this.setState(prevState => ({
			darkMode: !prevState.darkMode,
		}));
	}
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

 

  render() {
    const {error, results, darkMode, selectedDate} = this.state;
    if(error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <ThemeContext.Provider value={darkMode}>
            <div className={`filmList ${darkMode ? 'main-bg-dark' : 'main-bg-light'}`}>
              <h3 className={`title ${darkMode ? 'txt-color-dark' : 'txt-color-light'}`}>Favorite Movies</h3>
              <ThemeButton darkMode={darkMode}
              darkModeBtn={this.darkModeBtn}/>
              <Pagination 
              currentPages={this.state.currentPages} 
              totalPages={this.state.totalPages} 
              nextPage={this.nextPage} 
              perviousPage={this.perviousPage}
              darkMode={this.state.darkMode}/>
              <ul className="allPosters">
                {results.map(item => (
                  <li className="poster" key={item.id}>
                    <RateSwith 
                    popularity={item.popularity}
                    darkMode={darkMode}/>
                    <h3 className={`${darkMode ? 'poster-title-dark' : 'poster-title-light'}`}>{item.title}</h3>
                    {this.state.showPopup ? 
                    <PopUp 
                    text={item.release_date} 
                    darkMode={darkMode}
                    closePopup={this.togglePopup}/> 
                    : null}
                    <img src={'https://image.tmdb.org/t/p/w300' + item.poster_path} onClick={this.togglePopup}></img>
                    <p className={`${darkMode ? 'poster-txt-dark' : 'poster-txt-light'}`}>{item.overview}</p>
                  </li>
                ))}    
              </ul>
            </div>
          </ThemeContext.Provider>
      )
    }
  }
  
}



export default App;
import React from "react";

class Api extends React.Component{
  constructor() {
    super();
  }

  fetchPopularFilms() {
      const popular = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=81c8e393b8ff77b6d1f9247e798d7de9`, {
      headers: this.headers
      });
      const data = popular.json();
      return data.results;
  }
  render() {
    return (
    <div>123</div>
    )
  }
}

export default Api();
class Api {
  constructor() {
    this.searchUrl = "https://api.themoviedb.org/3/search/movie"
    this.apiKey = "81c8e393b8ff77b6d1f9247e798d7de9"
    this.header = {'Content-Type': "application/json"}
  }

  async fetchMoviesBySearchText(query) {
    try {
      let url = `${this.searchUrl}?api_key=${this.apiKey}&query=${query}`;
      const searchMovie = await fetch(url, {
        headers: this.headers
      });
      const data = await searchMovie.json();
      // console.log(data.results)
      // console.log(url)
      return await data.results;
    } catch (error) {
      console.log("fetchMoviesBySearchText", error);
    }
  }
}

export default new Api();
class Api {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/'
    this.headers = { 'Content-Type': 'application/json'};
  }

  async fethPopularFilms() {
    try {
      const popular = await fetch(`${this.url}movie/popular?api_key=81c8e393b8ff77b6d1f9247e798d7de9`, {
        headers: this.headers
      });
      const data = await popular.json();
      return await data.resulst;
    } catch (error) {
      console.log("fetchPopularMovies error", error);
    }
  }
}

export default new Api();
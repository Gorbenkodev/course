class Api {
  constructor() {
     this.url = "https://api.themoviedb.org/3/"
     this.headers = { "Content-Type": "application/json" };
  }

  async fetchPopularMovies() {
     try {
         const popular = await fetch(`${this.url}movie/popular?api_key=81c8e393b8ff77b6d1f9247e798d7de9&language=en-US&page=1`, {
         headers: this.headers
        });
        const data = await popular.json();
        //console.log(data.results);
        return await data.results;

     } catch (error) {
        console.log("fetchPopularMovies error", error);
     }
  }
}

export default new Api();
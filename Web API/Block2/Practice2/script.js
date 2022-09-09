import Api from "./api.js"

let input = document.querySelector('input');
let counter = document.getElementById('result')
let block = document.getElementsByClassName('movie')

input.addEventListener('keydown', async(evt) => {
  if (evt.key === 'Enter') {
    const searchRes = await Api.fetchMoviesBySearchText(evt.target.value)
    const count = searchRes.length;
    if(count === 0) {
    counter.textContent = `No results for: ${input.value}`;
    } else {
      counter.textContent = `Results: ${count}`;
    }
    input.value = '';
    function renderMovies() {
      const main = document.getElementById('main')
      searchRes.forEach((movie) => {
        const imagePath = "https://image.tmdb.org/t/p/w300";
        const { poster_path, original_title } = movie
        const moviesElement = document.createElement('li');
        moviesElement.classList.add('movie');
        moviesElement.innerHTML = `
        <img src="${imagePath + poster_path}" alt="#"/>
        <h3>${original_title}</h3>`;
        main.appendChild(moviesElement)
     });
    }
    renderMovies()
  }
})

 


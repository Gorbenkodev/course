import Api from "./api.js"

let input = document.querySelector('input');
let counter = document.getElementById('result')
let more = document.getElementById('more')

input.addEventListener('click', () => {
  input.value = '';
})

input.addEventListener('keydown', async(evt) => {
  if (evt.key === 'Enter') {
  main.innerHTML = '';
    const searchRes = await Api.fetchMoviesBySearchText(evt.target.value, 1)
    const count = searchRes.length;
    if(count === 0) {
    counter.textContent = `No results for: ${input.value}`;
    } else {
      counter.textContent = `Results: ${count}`;
    }
    function renderMovies() {
      const main = document.getElementById('main')
      searchRes.forEach((movie) => {
        const imagePath = "https://image.tmdb.org/t/p/w300";
        const { poster_path, original_title} = movie
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

let i = 1;

more.addEventListener('click', async() => {
  i++;
  const searchRes = await Api.fetchMoviesBySearchText(input.value, i)
  function renderMovies() {
    const main = document.getElementById('main')
    searchRes.forEach((movie) => {
      const imagePath = "https://image.tmdb.org/t/p/w300";
      const { poster_path, original_title} = movie
      const { total_pages } = movie
      const moviesElement = document.createElement('li');
      moviesElement.classList.add('movie');
      moviesElement.innerHTML = `
      <img src="${imagePath + poster_path}" alt="#"/>
      <h3>${original_title}</h3>`;
      
      main.appendChild(moviesElement)
   });
  }
  renderMovies()  
} )

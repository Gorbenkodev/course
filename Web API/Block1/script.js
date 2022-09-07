// // const tweet = document.querySelector('li');

// // // console.log(tweet)

// // const tweets = document.querySelectorAll('li');

// // // console.log(tweets)

// // console.log(tweets[1]);

// // const text = tweets[1].querySelector('p.text');

// // console.log(text.textContent);

// const newTweet = document.createElement('li');

// // const newTweetUsername = document.createElement('p');

// // newTweetUsername.textContent = '@ironman'

// // console.log(newTweetUsername)

// // const newTweetText = document.createElement('p');
// // newTweetText.textContent = 'Hello world!';

// // newTweet.append(newTweetUsername, newTweetText)

// // console.log(newTweet.innerHTML)

// newTweet.innerHTML = `
//   <p class="username">@ironman</p>
//   <p class="text">Hello world!!</p>
// `;

// console.log(newTweet);

// const list = document.getElementById('list');

// console.log(list)

// // list.append(newTweet)

// list.prepend(newTweet);

// // setTimeout(() => {
// //   list.prepend(newTweet)

// //   newTweet.animate([{
// //     opacity: 0,
// //   },
// //   {
// //     opacity: 1,
// //   },
// //   ],
// //   {
// //     duration: 3000,
// //   })
// // }, 1000)

// const secondTweet = document.querySelectorAll('li') [1]

// setTimeout(() => {
// secondTweet.remove()
// }, 1000)

// ----------------------------------------------------------------------- Pract 1


// import Api from './api.js'
// import { asyncProvider } from './loader.js'

// asyncProvider()
// const filmList = await Api.fetchPopularMovies();
// console.log(filmList)

// console.log(data.results)

import Api from './api.js';
import { asyncProvider } from './loader.js'
const filmList = await asyncProvider(Api.fetchPopularMovies.bind(Api));
 
function renderPopularMovies() {
   const main = document.getElementById('main')
   filmList.forEach((movie) => {
      const imagePath = "https://image.tmdb.org/t/p/w300";
      const { poster_path, original_title } = movie
      const moviesElement = document.createElement('li');
      moviesElement.classList.add('movie');
      moviesElement.innerHTML = `<a href="https://www.instagram.com/frau_weigandt/">
      <img src="${imagePath + poster_path}" alt="#"/>
      <h3>${original_title}</h3>
      </a>
   `;
      main.appendChild(moviesElement)
   });
}
renderPopularMovies();

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

function setLocalStorage(id) {
   
   id = id.split(" ")[2];

   const activeButton = document.querySelectorAll('like-button-active');
   if(activeButton) {
      let arr = readLocalStorage();
      const index = arr.indexOf(id);
      if(index === -1) {
         arr.push(id);
      } else {
         arr.splice(index, 1);
      }
      return localStorage.setItem('myKey', JSON.stringify(arr));
   }
}
 
function readLocalStorage() {
   let arr = localStorage.getItem('myKey');
   arr = JSON.parse(arr);
   if (arr === null) {
      arr = [];
   }
   console.log(arr)
   return arr
}

function renderPopularMovies(filmList, arrId) {
   arrId = localStorage.getItem('myKey');
   arrId = JSON.parse(arrId)
   const main = document.getElementById('main')
   // console.log(arrId)
   filmList.forEach((movie) => {
      const imagePath = "https://image.tmdb.org/t/p/w300";
      let { id, poster_path, original_title, isLiked } = movie
      // console.log(id)
      const moviesElement = document.createElement('li');
      moviesElement.classList.add('movie');
      moviesElement.innerHTML = `
      <img src="${imagePath + poster_path}" alt="#"/>
      <div class="movie-item">
      <h3>${original_title}</h3>
      <div class="buttons">
         <a href="#" class="like-button ${isLiked ? "like-button-active" : ""} ">
         <i class="fa fa-heart ${id}"></i>
         </a>
      </div>
      </div>
   `;
   
      main.appendChild(moviesElement)
   });
   const likeButtons = document.querySelectorAll('a.like-button');
   likeButtons.forEach((buttonElement) => {
      buttonElement.addEventListener('click', (evt) => {
         evt.preventDefault();
         buttonElement.classList.toggle('like-button-active')
         setLocalStorage(evt.target.className)
      })
   })
}

renderPopularMovies(filmList);

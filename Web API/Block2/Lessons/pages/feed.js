const root = document.getElementById('app');

export function Feed() {
const layout = `<header>
<form id="new-tweet-form" class="column">
  <textarea name="text" id="input" placeholder="What's happening?"></textarea>
  <div class="row justify">
    <div class="characters-counter">
      <span class="count">0</span>/280
    </div>
  <button type="submit" class="submit" disabled>Tweet</button>
  </div>
</form>
</header>
<main>
<ul id="list">
  <li>
    <p class="username">@terry</p>
    <p class="text">Hey, apiko academy!</p>
    <div class="buttons">
      <a href="#" class="like-button like-button-active">
        <i class="fas fa-heart"></i>
      </a>
    </div>
  </li>
  <li>
    <p class="username">@jack</p>
    <p class="text">just setting up my twttr</p>
    <div class="buttons">
      <a href="#" class="like-button">
        <i class="fas fa-heart"></i>
      </a>
    </div>
  </li>
</ul>
</main>`

root.innerHTML = layout;
const form = document.querySelector('#new-tweet-form');
const list = document.querySelector('#list')
const textarea = form.querySelector('textarea');
const button = form.querySelector('button');
const counter = document.querySelector('.characters-counter')
const countElement = counter.querySelector('.count')
// const likeButtons = document.querySelectorAll('a.like-button')

const USER_ID = 1;





textarea.addEventListener('input', evt => {
  const count = evt.target.value.length;

  countElement.textContent = count;

  if (count === 0 || count > 280) {
    button.setAttribute('disabled', true);

    countElement.style.color = 'red'
  } else {
    button.removeAttribute('disabled')

    countElement.style.color = 'black'

  }
});

textarea.onfocus = () => {
  counter.style.visibility = 'visible';
}

textarea.onblur = () => {
  counter.style.visibility = 'hidden';
}


form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const data = new FormData(evt.target)

  // if(data.get('text').length === 0) {
  //   return;
  // }

  // console.log('submit', data.get('text'))

  // const tweet = document.createElement('li');

  // tweet.innerHTML = `
  // <p class="username">@terrysahaidak</p>
  // <p class="text">${data.get('text')}</p>`;

  // list.prepend(tweet);


  // textarea.value = '';
  addTweet({ text: data.get('text'), username: '@terry', isLiked: false });
})

function addTweet({ text, username, isLiked }) {
  const tweetObj = { userId:USER_ID, text, username, isLiked};

  const tweet = createTweet(tweetObj);

  list.prepend(tweet);


  textarea.value = '';
  button.setAttribute('disabled', true);

  saveTweet(tweetObj);
}
function createTweet({ tweetId, userId, text, username, isLiked}) {
const tweet = document.createElement('li');

tweet.dataset.tweetId = tweetId;
tweet.dataset.userId = userId;
 
tweet.innerHTML = `
<p class="username">${username}</p>
<p class="text">${text}</p>
<div class="buttons">
        <a href="#" class="like-button ${isLiked ? "like-button-active" : ''}">
          <i class="fas fa-heart"></i>
        </a>
      </div>
`;
// const buttonElement = tweet.querySelector('a.like-button')


//   buttonElement.addEventListener('click', () => {
//     buttonElement.classList.toggle('like-button-active')
//   })

return tweet;
}

function getTweets() {
  const tweets = [
    {
      tweetId: 1,
      userId: USER_ID,
      username: '@terry',
      text: 'Hey, apiko!',
      isLiked: true,
    },
    {
      tweetId: 2,
      userId: 2,
      username: '@apko_hr',
      text: 'Yo!',
      isLiked: false,
    }
  ];

  const localTweets = window.localStorage.getItem('tweets');

  if (localTweets === null) {
    return tweets;
  }

  return JSON.parse(localTweets);
}

function saveTweet(tweet) {
  const tweets = getTweets();

  tweets.unshift(tweet);

  window.localStorage.setItem('tweets', JSON.stringify(tweets))
}

function renderApp() {
  const tweets = getTweets();
  
  tweets.forEach(tweet => {
    const tweetElement = createTweet(tweet)
    list.append(tweetElement);
  })
}

list.addEventListener('click', (evt) => {
  const tweet = evt.target.closest('li');
  const buttonElement =  evt.target.closest('a.like-button');

  if (buttonElement !== null) {
    buttonElement.classList.toggle('like-button-active');
    
    if (Number(tweet.dataset.userId) === USER_ID) {
      alert('Liked own tweet')
    }
  }

  const usernameElement =  evt.target.closest('p.username')

  if(usernameElement !== null) {
    // console.log(tweet.dataset.userId)
    // console.log('Navigate to', usernameElement.textContent)

    window.history.pushState(null, null, `/users/${tweet.dataset.userId}`)
    return;
  }

  window.history.pushState(null, null, `/tweets/${tweet.dataset.tweetId}`)
})

renderApp()
}
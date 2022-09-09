// const username = document.querySelector('#list > li:nth-child(1) > p.username');

// console.log(username);

// username.addEventListener('click', (evt) => {
//   console.log('click', evt.target)

//   evt.target.remove();

//   evt.stopPropagation()
// })

// const tweet = document.querySelector('li');

// tweet.addEventListener('click', () => {
//   console.log('navigate ti tweet')
// })
// ----------------------------------------------------

const form = document.querySelector('#new-tweet-form');
const list = document.querySelector('#list')
const textarea = form.querySelector('textarea');
const button = form.querySelector('button');
const counter = document.querySelector('.characters-counter')
const countElement = counter.querySelector('.count')
// const likeButtons = document.querySelectorAll('a.like-button')

const USER_ID = 1;

const tweets = [
  {
    userId: USER_ID,
    username: '@terry',
    text: 'Hey, apiko!',
    isLiked: true,
  },
  {
    userId: 2,
    username: '@apko_hr',
    text: 'Yo!',
    isLiked: false,
  }
]

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
  const tweet = createTweet({ userId:USER_ID, text, username, isLiked});
  list.prepend(tweet);


  textarea.value = '';
  button.setAttribute('disabled', true);
}
function createTweet({userId, text, username, isLiked}) {
const tweet = document.createElement('li');

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

function renderApp() {
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
    console.log(tweet.dataset.userId)
    console.log('Navigate to', usernameElement.textContent)
  }
})

renderApp()
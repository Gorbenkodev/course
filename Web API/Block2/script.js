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
const likeButtons = document.querySelectorAll('a.like-button')

likeButtons.forEach((buttonElement) => {
  buttonElement.addEventListener('click', () => {
    buttonElement.classList.toggle('like-button-active')
  })
})

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
  addTweet({ text: data.get('text') });
})

function addTweet({ text }) {
  const tweet = document.createElement('li');
 
  tweet.innerHTML = `
  <p class="username">@terrysahaidak</p>
  <p class="text">${text}</p>`;

  list.prepend(tweet);


  textarea.value = '';
  button.setAttribute('disabled', true);
}
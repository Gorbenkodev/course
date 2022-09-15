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
import { Feed } from './pages/feed.js'
import { NotFound } from './pages/notFound.js'
import { User } from './pages/user.js'
import { Tweet } from './pages/tweet.js'



const routes = [
  {
    match: (url) => {
      return url ==='/';
    },
    renderRoute: Feed,
  },
  {
    match: (url) => {
      return url.includes('/users/') ;
    },
    renderRoute: User,
  },
  {
    match: (url) => {
      return url.includes('/tweets/');
    },
    renderRoute: Tweet,
  },
  {
    match: () => true,
    renderRoute: NotFound,
  }
]


class Router {
  constructor(routes) {
    this._routes = routes;

    this.reroute();

    window.history.pushState = (data, title, url) => {
      History.prototype.pushState.apply(window.history, [data, title, url])
      this.reroute();
    }

    window.onpopstate = () => {
      this.reroute();
    }
  }

  reroute() {
    const matchedRoute = this._routes.find(route => {
      const matched = route.mathch(window.location.pathname)

      return matched;
    })

    matchedRoute.renderRoute();
  }
}

const router = new Router(routes)

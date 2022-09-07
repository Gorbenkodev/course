// import * as phrases from '../EsModules/es_modules2.js';
// // import { greeting, goodbye} from './es_modules2.js';
// // import {greeting as hi, goodbye as bye} from './es_modules2.js';
// import User, { userConst } from '../EsModules/user.js'
// // import MyUser from '../EsModules/user.js'




// const phrase = phrases.greeting.sayHello("en");
// console.log(phrase);

// const phrase2 = phrases.goodbye.sayGoodbye("es");
// console.log(phrase2);

// const user1 = new User('John');
// // const user1 = new MyUser('John');

// console.log(user1.name)
// console.log(userConst)

// ------------------------------------------------------

// import('path/to/module')
//   .then(module => {

//   })
//   .catch(err => {
//     console.error('Err: ' + err)
//   });

// const loadModule = async () => {
//   const module = await import('path/to/module');
// }

// loadModule()

const isGreating = true;
// const isGreating = false;

if (isGreating) {
  import('../EsModules/speech/hi.js')
  .then(module => {
    const phrase = module.greeting.sayHello('es');
    console.log(phrase);
  })
  .catch(err => console.warn(err))
} else {
  import('../EsModules/speech/bye.js')
    .then(module => {
      const phrase = module.goodbye.sayGoodbye('en');
      console.log(phrase);
    })
    .catch(err => console.warn)
}

const getUser = async () => {
  const defaultModel = await import('./user.js');
  const User = defaultModel.default;

  const user1 = new User('John');
  console.log(user1.name)
}

getUser()
// function write1() {
//   console.log(1)
// }
// function write2() {
//   setTimeout(function console2(){
//   console.log(2)}, 1000)
// }
// function write3() {
//   console.log(3)
// }

// write1()
// write2()
// write3()
// -------------------------------------- callback

// const callback = val => 
// console.log(`${val} is successfully calculated!`);

// const func = (val, callback) => {
//   const result = val * 2;
//   callback(result)
// };

// func(2, callback);

// setTimeout(func|code, delay, ...args)---запускает функцию с задержкой

// const first = () => setTimeout(() => console.log(1), 0);
// const second = () => console.log(2);

// first()
// second()

// clearTimeout(first)

// setInterval(func|code, delay, ...args)---будет выполнять функцию каждую единицу указаного времени

// let i = 0;

// const timerId = setInterval(() => {
//   if(i > 2) {
//     clearInterval(timerId)
//     return;
//   }

//   console.log(i);
//   i++
// }, 500);

// const callback = (err, data) => {
//   if (!err) {
//   console.log(`Tasks successfully fetched!:
//     ${data.join(', ')}`);
//   } else {
//     console.log(`Ooops, something went wrong:
//       ${err}`);
//   }
// }

// const fetchTasks = cb => {
//   console.log('Fetching data...');

//   //Async fetch...

//   // const error = 'Err: Data not found';
//   // const data = null;
//   const error = null;
//   const data = ['Task1', 'Task2', 'Task3'];

//   // if (error) {
//   //   cb(error);
//   // } else {
//   //   cb(null, data);
//   // }
//   const fetchData = (fCallback, error, data) => {
//     if ( error) {
//       fCallback(error);
//     } else {
//       fCallback(null, data);
//     }
//   }

//   setTimeout(fetchData, 1000, cb, error, data)

// }

// fetchTasks(callback)

// -------------------------------------- Promises

// const promise = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve(1), 2000);
//   setTimeout(() => reject('Error'), 2000);

// });

// promise.then(
//   result => console.log(result),
//   err => console.log(err)
//   );



// p.then(onFulfilled[, onRjected]); //------------------- Принимает обе функции

// p.then(value => {
//   // выполнение
// }, reason => {
//   // Отмена
// });

// p.catch(onRejcted) //----------------- Работает только с отменой

// p.catch(function(reason) {
//   // Отмена
// });

// p.finally(onFinaly); //-----------------вызывается в любом случае

// p.finally(function() {

// })

// doSomething()
//   .then(result => doSomethingElse(result))
//   .then(newResult => doThirdThing(newResult))
//   .then(finallyResult => {
//     console.log(`Финальный результат ${finallyResult}`);
//   })
//   .catch(failureCallback)

// new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//   console.log(result);
//   return result * 2;
// }).then(function(result) {
//   console.log(result);
//   return result * 2;
// }).then(function(result) {
//   console.log(result);
//   return result * 2;
// })

// Promise.all() //- позволяет дождаться выполнения всех promise
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, 'foo');
// });

// Promise.all([promise1,promise2,promise3])
//   .then((values) => {
//     console.log(values);
//   });

// Promise.allSettled()

// const promise1 = new Promise((resolve, reject) => 
//   setTimeout(reject, 100, 'foo')
// );

// const promise2 = Promise.resolve(3);

// Promise.allSettled([promise1, promise2])
//   .then((results) => results
//     .forEach((result) => console.log(result.status))
// );

// Promise.race() - отображается только тот результат который выполнился быстрее
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'p1');
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'p2');
// });

// Promise.race([promise1,promise2]).then((value) => {
//   console.log(value);
// })

// -------------------------------------- Await notation

// async function fetchPost() {
//   const data = await fetch('post');
//   return data
// }

// async function hello() {
//   return 'Hello'
// }

// console.log(hello())

// doSomething()
//   .then(result => doSomethingElse(result))
//   .then(newResult => doThirdThing(newResult))
//   .then(finalResult => {
//     console.log(`Финальный результат: ${finalResult}`)
//   })

// async function callAsyncFunctions() {
//   const result = await doSomething();
//   const newResult = await doSomethingElse(result);
//   const finalResult = await doThirdThing(newResult);
//   console.log(`Финальный результат: ${finalResult}`)
// }


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, 'foo');
// });

// const  promiseAllAsync = async () => {
//   const result = await Promise.all(
//     [promise1,promise2,promise3]
//     );

//     console.log(result)
// }
// promiseAllAsync()

// async function fetchPost() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   const data = await response.json();
//   console.log(data);
// }

// fetchPost();

// async function asyncWithError() {
//   throw new Error('error in async function code');
// }

// async function awaitError() {
//   const result = await asyncWithError()
//   .catch(e => console.log(e))
// }

// awaitError()

// try {
//   throw new Error('Whoops!');
// } catch (error) {
//   console.log('Catch error: ', error)
// }

// async function fetchWithError() {
//   let isLoading = true;
//   try {
//     const response = await fetch(
//       'https://asdsadasd'
//     );
//     console.log(response);
//   } catch(err) {
//     console.log(err) 
//     } finally {
//     isLoading = false
//   }

//   console.log(isLoading);
// }

// fetchWithError()
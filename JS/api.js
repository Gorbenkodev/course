// GET - получить запрос из сервера
// POST - отправить запрос на сервера
// PUT - изменить запрос из сервера
// DELETE - удалить информацию из сервера

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((responce) => {
//     return responce.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('Fetch Error: ', err);
//   });
// fetch()
// Headers - заголовки запроса
// Request - помогает строить запросы на сервере
// Response - обрабатывает то что вернулось

// const url = "https://jsonplaceholder.typicode.com/todos/1";
// const headersObject = new Headers();

// fetch(url, {
//   method: "POST",
//   headers: headersObject,
//   body: bodyJson,
// });

// const JSONstring = JSON.stringify({ x: 5, y: 6 }); //--- превращает любой объект js в строку json
// console.log(JSONstring);

// const objectFromJSONSrting = JSON.parse(JSONstring); //--- принимает json строку и превращает в скрип js
// console.dir(objectFromJSONSrting);
// console.log(objectFromJSONSrting);

// const request = new Request(url, {
//   method: "POST",
//   headers: headersObject,
//   body: bodyJson,
// });

// const { url, method, headers} = request;

// fetch(request).then(response => {})

// fetch().then(responseObject => {

// });

// fetch()
// .theb((response) => {
//   if (response.ok) {
//     // запрос успешен
//   } else {
//     // не успешный запрос
//   }
// });

// fetch()
//   .then((response) => {
//     //...
//     const { status, statusText, url, headers, body } = response;
//   })

// fetch()
//   .then((response) => {
//     const data = JSON.parse(response.body);
//   })

// fetch()
//   .then((response) => {
//     return response.json();
//   })
//   .then ((data) => {
//     console.log(data);
//   })

// const myHeaders = new Headers();

// myHeaders.append('Content-Type', 'application/json');
// myHeaders.get('Content-Type')

// fetch('https://jsonplaceholder.typicode.com/todos/1', {
//   headers: myHeaders,
// }).then((response) => {
//   const { headers } = response;
//   console.log(headers.get('Content-Type'))
// })

//1. GET 

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => {
//   if (!response.ok) {
//     throw new Error(`Failed with status code: ${response.status}`)
//   }

//   return response.json();
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log("Fetch Error: ", err)
// })

//2. PUT

// const updatePost = {
//   id: 1,
//   userId: 2,
//   title: "Update Post",
//   body: "Update Post Body Text"
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: "PUT",
//   body: JSON.stringify(updatePost),
//   headers: {
//     "Content-type": "application/json"
//   }
// })
// .then((response) => {
//   if (!response.ok) {
//     throw new Error(`Failed with status code: ${response.status}`)
//     }
    
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log("Fetch Error: ", err)
//     });

//3. POST 

// const newPost = {
//     userId: 2,
//     title: "New Post",
//     body: "New Post Body Text"
//   };
  
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify(newPost),
//     headers: {
//       "Content-type": "application/json"
//     }
//   })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Failed with status code: ${response.status}`)
//       }
      
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log("Fetch Error: ", err)
//       });

//4. DELETE

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: "DELETE",
//   })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Failed with status code: ${response.status}`)
//       }
      
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log("Fetch Error: ", err)
//       });
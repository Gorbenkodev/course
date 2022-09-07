// const baseUrl = "https://jsonplaceholder.typicode.com";

// ---------------------------------------------- Task1
// fetch(`${baseUrl}/users`)
//   .then ((response) => {
//     if (!response.ok) {
//           throw new Error(`Failed with status code: ${response.status}`)
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log('Result: ', data)
//   })
//   .catch((err) => {
//       console.log("Fetch Error: ", err)
//     })
// ------------------------------------------------- Task2
// fetch(`${baseUrl}/users/10/albums`)
//    .then ((response) => {
//       if (!response.ok) {
//             throw new Error(`Failed with status code: ${response.status}`)
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log('Result: ', data)
//     })
//     .catch((err) => {
//         console.log("Fetch Error: ", err)
//       })
// ------------------------------------------------- Task3
// const newUser = {
//   name: 'Name LastName',
//   username: 'UserName',
//   email: 'usermail@gmail.com'
// }

// fetch(`${baseUrl}/users`, {
//   method: "POST",
//   body: JSON.stringify(newUser),
//   headers: {
//     "Content-type": "application/json"
//   }
// })
// .then((response) => {
//   if (!response.ok) {
//     throw new Error(`Failed with status code: ${response.status}`)
//     }
//     return response.json();
//     })
//     .then((data) => {
//       console.log('Result:', data);
//     })
//     .catch((err) => {
//       console.log("Fetch Error: ", err)
//     });
// ------------------------------------------------- Task4
// function getAlbum(id) {
//   return fetch(`${baseUrl}/albums/${id}`)
//   .then ((response) => {
//     if (!response.ok) {
//       throw new Error(`Failed with status code: ${response.status}`)
//     }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data)
//     })
//     .catch((err) => {
//         console.log("Fetch Error: ", err)
//     })
//  }
  
//  function getSpecifiedAlbums(ids = []) {
    
//  }
  
// //  getSpecifiedAlbums([1, 15])
// //   .then((results) => {
// //     console.log("Results: ", results);
// //   })
// //   .catch((error) => {
// //     console.log("Error: ", error);
// //   });
// getAlbum(1)

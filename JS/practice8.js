const baseLink = 'https://swapi.py4e.com/api/'

// async function fetchAlbums() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1/albums"
//   );

//   const data = await response.json();
//   console.log(data);
// }
  
// fetchAlbums();
  
// async function asyncWithError() {
//   throw new Error('error in async function code');
// }
  
// async function awaitError() {
//   const result = await asyncWithError()
//   .catch(e => console.log(e))
// }

// awaitError()
// ---------------------------------------------------- task 2

// async function getPlanets() {
//   const response = await fetch(
//     `${baseLink}planets`
//   );

//   const data = await response.json();
//   console.log(data);
// }

// getPlanets();

// ---------------------------------------------------- task 3

// async function getSkywalkers() {
//   const response = await fetch(
//     `${baseLink}people/?search=Skywalker`
//   );

//   const data = await response.json();
//   console.log(data);
// }

// getSkywalkers();

// ---------------------------------------------------- task 4

// async function fetchSWAPI(resource, throwError) {
//   try {
//     const rootUrl = 'https://swapi.py4e.com/api/';
//     let responce = await fetch(`${rootUrl}${resource}`)
//     if (!responce.ok) {
//        throw new Error(`Failed with status code: ${responce.status}`)
//     }
//     let data = responce.json();
//     return data;
//  }
//  catch (error) {
//     console.log("FetchSWAPI error ", error);
//  } 
// }
  
//  async function testFetchSWAPI() {
//   try {
//     const person = await fetchSWAPI("people/1/");
//     console.log("person ", person);
  
//     const film = await fetchSWAPI("films/1/");
//     console.log("film ", film);
  
//     const film1001Id = await fetchSWAPI("films/1001/");
//     console.log("film1001Id ", film1001Id);
  
//     await fetchSWAPI("films/1101/", true);
//   } catch (error) {
//     console.log("testFetchSWAPI error ", error);
//   }
//  }
  
//  testFetchSWAPI();
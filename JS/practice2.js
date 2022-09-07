// --------------------------------------------- task 1
// const arr = [2, 3, 1, 3, 3, 7];
// function unicFn(initialArray) {
//     return initialArray.filter((e,i,a) => a.indexOf(e) == i)
//   }

//   console.log(unicFn(arr))
  

// --------------------------------------------- task 2

// function isEvenArray(initialArray) {
//     const arr = [1,2,3,4,5,6,7,8];
//     const result = arr.filter((_, index) => index%2==0)
//     .concat(arr.filter((_, index)=>index%2!=0))
//     console.log(result.slice(0,4) + ' - NO')
//     console.log(result.slice(4,8)+ ' - YES')
//     }

//    isEvenArray();
   
// --------------------------------------------- task 3

// const arr = [2, 'string', 3, , , 'test']
// const newArr = [];

// function filterArray(array){
//     for(let i=0; i< array.length; i++){
//         if(typeof array[i] != "string"){
//             continue;
//         }else {
//             newArr.push(array[i]); 
//         }
//     }
// console.log(newArr);
// }
// filterArray(arr);

// --------------------------------------------- task 4

// let person = {
//   Max: {
//     age: 23,
//     city:'London',
//   },
//   Mike: {
//     age: 20,
//     city: 'NY',
//   },
//   John: {
//     age: 12,
//     city: 'London'
//   },
//   Alex: {
//     age: 18,
//     city: 'London'
//   }
// }

// function getKeyByValueAge(object, value) {
//   return Object.keys(object).find(key => object[key] >= value);
// }

// function getKeyByValueCity(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }

// function findUser(initialObject) {
//   const arr = [];
//   for(const [k,v] of Object.entries(initialObject)) {
//     if((getKeyByValueAge(v, 18)) && (getKeyByValueCity(v, 'London'))){
//       arr.push(k)
//     }
//   }
//   console.log(arr)
// };


// findUser(person)

// --------------------------------------------- task 5
// function removeObj(arrayOfObj, keyName, value) {

//   for (let i = 0; i < arrayOfObj.lenght; i++)
//     if (keyName == 2, "age", "year") {
//       newArr.push(1)
//     }
//   console.log(arr)
//   console.log(newArr)

//   }

// const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
// const newArr =[]
// removeObj(arr, "age", 2);
// removeObj(arr, "year", 2);
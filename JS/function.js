// function helloWorld(name, lastName) {
//     // console.log('Hello ' + name + ' ' + lastName);
//     if(!lastName) return;
//     return 'Hello ' + name + ' ' + lastName;
// }

// const greeting = helloWorld('John', 'Doe');
// console.log(greeting)
// console.log(helloWorld('Peter', 'Jackson'));
// console.log(helloWorld('Steve'));

// -------------------

// const vanga = (question) => {
    
//     if(!question || question.length === 0) {
//         return "Try again";
//     }

//     if(question.length === 42) return 42;

//     switch(question.length % 3) {
//         case 0:
//             return 'No';
//             break;
//         case 1:
//             return "Maybe";
//             break;
//         case 2:
//             return "Yes";
//             break;
//     }
// };

// const q1 = vanga('');
// const q2 = vanga('Чи э життя поза землею?');
// const q3 = vanga('А Вика меня любит?')
// const q4 = vanga('А Оля?')
// const q5 = vanga('Яка видповидь на головне пытання всесвиту?')

// console.log(q1);
// console.log(q2);
// console.log(q3);
// console.log(q4);
// console.log(q5);
// -------------------

// const person = {
//   name: 'Joe',
//   showCintext: function() {
//     console.log(this)
//   }
// }

// person.showCintext()

// const cat = {
//   name: 'Barsik',
//   sound: 'Meow',
//   greet: function() {
//     console.log(`Hello! I'm ${this.name} and I say ${this.sound}`)
//   }
// }

// cat.greet()

// function greet() {
//   console.log(`Hello! I'm ${this.name} and I say ${this.sound}`);
// }

// const zoo = [
//   {
//     name: 'Barsik',
//     sound: 'Meow',
//     greet: greet,
//   },
//   {
//     name: 'Iriska',
//     sound: 'Bark',
//     greet: greet,
//   },
//   {
//     name: 'Buryonka',
//     sound: 'Moo',
//     greet: greet,
//   },
// ];

// // zoo.forEach(animal => animal.greet());
// zoo.forEach(animal => setTimeout(animal.greet, 1000));

// const dog2 = {
//   trick: 'pretend dead 2',
// }

// const dog = {
//   name: 'Iriska',
//   sound: 'bark',
//   trick: 'pretend dead',
//   greet: function() {

//     console.log(`Hello! I'm ${this.name} and I say ${this.sound}`);

//     const doSomeTrick = function() {

//       console.log(`And now I will do the trick that named: ${this.trick}`)

//     }

//     // const doSomeTrickAsADog = doSomeTrick.bind(this);

//     // const doSomeTrickAsADog = doSomeTrick.bind(dog2);

//     doSomeTrickAsADog();
//   }
// }

// dog.greet()

// ----------------------------------------------------------------------------- less 19 side effects and higher function

// let i = 0

// const inc = (val) => val + 1;

// console.log(inc(i))

// const pure = x => x + 1;
// const impure = () => i++;

// console.log('pure 1: ' + pure(i));
// console.log('pure 2: ' + pure(i));
// console.log('pure 3: ' + pure(i));

// console.log('impure 1: ' + impure());
// console.log('impure 2: ' + impure());
// console.log('impure 3: ' + impure());

// const add = (a, b) => a + b;

// console.log(add(2, 2));


// const getOdd = arr => {
//   const odds = [];

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !== 0) odds.push(arr[i]);
//   }
//   return odds;
// };

// console.log(getOdd([1, 2, 3, 4]));
// console.log(getOdd([1, 2, 3, 4]));
// console.log(getOdd([21, 42, 77, 83]));

// const getGreaterThan42 = arr => {
//   const greaterThan42 = [];

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 42 ) greaterThan42.push(arr[i]);
//   }
//   return greaterThan42;
// };

// console.log(getGreaterThan42([21, 42, 77, 83]));

// const isOdd = val => val % 2 !== 0;
// const isGreaterThan42 = val => val > 42;

// const filter = (fn, arr) => {

//   const result = [];

//   for(let i = 0; i < arr.length; i++) {
//     if(fn(arr[i])) result.push(arr[i]);
//   }
//   return result;
// }

// console.log(filter(isOdd, [1,2,3,4]));
// console.log(filter(isGreaterThan42, [41,42,43,53]))

// ----------------------------------------------------------------------------- less 20 curry finction

// const add = x => y => x + y;

// const add2 = function(x) {
//   return function(y) {
//     return x + y;
//   }
// }

// const add42 = add(42);

// console.log(add42(2))

// const curry = a => b => c => a * b - c;
// const partiallyApplied = a => (b,c) => a * b - c;

// console.log(curry(1)(2)(3));
// console.log(partiallyApplied(1)(2,3));

// g: a -> b;
// f: b -> c;

// f(g(a)): a -> c;

// const f = x => x + 2;
// const g = x => x * 2;
// const z = x => x / 3;
// const q = x => x - 5;

// // const compose = (f, g) => x => f(g(x));

// const compose = ([...fncs]) => x => fncs.reduceRight(
//   (g,f) => f(g), x
//   );

// const h = compose([g, f, q, g]);

// // const h = x => f(g(x));
// // const h = x => g(f(x));

// console.log(h(2))
// console.log(h(4))


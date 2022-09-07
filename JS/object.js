// ------------------------------ Object

// let ninja = {
//     visible: false,
//     name: 'Hatori',
//     mana: 322,
// };

// const hero = new Object(); //пустой объект
// const ninjas = new Array(); // пустой масив
// const timeToPlay = new Date(); // объект типа date
// const ninjasMap = new Map(); // объект типа map

// let string = 'Hello';
// let string2 = string;

// string2 = string2.toUpperCase();

// console.log(string);
// console.log(string2);

// let ninja2 = Object.create(ninja);

// ninja2.health = '100%';

// console.log(ninja.health);
// console.log(ninja2.health);

// --------------------------------- методы объектов

// Object.create - создаёт новый объект являющейся копией уже существующего
// Object.assign - копирует свойства с одного объекта в другой
// Object.keys - вернёт масив всех ключей объекта
// Object.values - вернёт масив всех значений объекта
// Object.enteries - комбинированый метод, вернёт масив из масивов ([ключ:значение])
// Object.freeze - замораживает объект не позволяя как либо взаимодействовать с ним



// // Create Object
// const person = Object.create({});
// person.name = 'John';
// person.surname = 'Smith';

// console.log(person);

// // Create Array
// const array = Object.create([]);
// array[0] = 0;
// array[1] = 1;

// console.log(array);

// const person1 = {
//     name: 'John',
//     surname: 'Doe',
//     age: 24,
//     ocupation: {
//         name: 'programmer',
//         exp: '2 years',
//     }
// };

// Object.assign(person1, 
//     {
//         surname: 'Smith',
//         age: 24,
// });

// const person2 = Object.assign({}, person1);

// person2.age = 24;

// console.log(person1);
// console.log(person2);

// const person1Keys = 
//     Object.keys(person1); 

//     console.log(person1Keys);

// const person1Values = 
//     Object.values(person1); 

//     console.log(person1Values);

// const person1Enteries = 
//     Object.entries(person1); 

//     console.log(person1Enteries);

// const enteries = 
// Object
//     .entries(person1)
//     .forEach(([key, value]) => {
//     console.log(key + ': ' + value);
// });

// Object.freeze(person1);

// person1.age = 25;

// console.log(person1.age);

// person1.ocupation.exp = '3 years';

// console.log(person1.ocupation.exp);
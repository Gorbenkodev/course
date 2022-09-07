// const eat = () => console.log('Eating...')

// const animal = {
//   eat,
// };

// const human = Object.create(animal);
// human.speak = () => console.log('Speaking...');

// human.eat();
// human.speak();

// console.dir(human)

// const programmer = Object.create(human);
// programmer.code = () => console.log('Coding...')

// programmer.eat();
// programmer.speak();
// programmer.code();

// console.dir(programmer);

// // Object.setPrototypeOf(animal, programmer)
// // ------------------------------------------------

// function Animal(name) {
//   this.name = name;
// };

// Animal.prototype.eat = () => console.log('Eating...')

// // const dog = new Animal('Iriska');
// // console.log(dog)

// // const animals = [
// //   new Animal('Iriska'),
// //   new Animal('Barsik'),
// //   new Animal('Buronka'),

// // ];

// // console.log(animals.forEach(animal => animal.eat()));

// function Human(name) {
//   this.name = name;
// };

// Human.prototype = Object.create(Animal.prototype);
// Human.prototype.speak = () => console.log('Speaking...');

// const humans = [
//   new Human('Joe'),
//   new Human('Steve'),
//   new Human('Bob'),
// ];

// humans.forEach(human => {
//   console.dir(human);
//   human.eat();
//   human.speak();
// })
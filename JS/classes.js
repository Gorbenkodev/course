// class MyClass {

//   constructor() {}

//   method1() {console.log(1)}
//   method2() {console.log(2)}
//   method3() {console.log(3)}

// }
// const entry = new MyClass();

// entry.method1();
// entry.method2();
// entry.method3();

// console.dir(entry)
// ------------------------------------

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }

// const user = new User('Mike');
// console.dir(user)
// user.sayHi();

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log('Too short');
//       return;
//     }
//     this._name = value;
//   }
// }

// const user = new User('Mike');
// console.log(user.name);

// const user2 = new User("Joe");

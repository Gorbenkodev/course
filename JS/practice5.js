// function Calculator (a,b) {
//   this.a = a,
//   this.b = b
// } 

// Calculator.prototype.sum = (a,b) => console.log(a + b);
// Calculator.prototype.subtract = (a,b) => console.log(a - b);

// // console.dir(Calculator)

// function AdvancedCalculator (a,b) {
//   this.a = a,
//   this.b = b
// };

// AdvancedCalculator.prototype = Object.create(Calculator.prototype);
// AdvancedCalculator.prototype.multiply = (a,b) => console.log(a * b);
// AdvancedCalculator.prototype.divide = (a,b) => console.log(a / b);

// AdvancedCalculator.prototype.sum(1,2)
// AdvancedCalculator.prototype.subtract(1,2)
// AdvancedCalculator.prototype.multiply(1,2)
// AdvancedCalculator.prototype.divide(1,2)

// // console.dir(AdvancedCalculator)

// -------------------------------------------

//  class TodoItem {
//   constructor(name, checked) {
//   this.id = this.generateId();
//   this.name = name;
//   this.checked = checked;
//   }

//   get checked() {
//     return this._checked;
//   }

//   set checked(value) {
//     if (typeof(value) !== 'boolean') {
//       this._checked = false;
//       return
//     }
//     this._checked = value;
//   }
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   }
//  }

// console.log(new TodoItem('Joe'))
// console.log(new TodoItem('John'))

// let users  = {
//   Joe: new TodoItem('Joe'),
//   John: new TodoItem('John'),
//   Steve: new TodoItem('Steve'),
//   Jake: new TodoItem('Jake')
// }
// console.log(users)

// class TodoList extends TodoItem {
//   constructor(id, name) {
//     super(id, name)
//     this.items = [];
//   }

//   addItems(el) {
//     this.items.push(el);
//   }

//   removeItemById(id) {
//     this.items = this.items.filter(el => el.id !== id);
//  }

//  getItemById() { 
//   for (let i = 0; i < this.items.length; i++) {
//     if (this.items[i][id] === id) {
//        return this.items[i];
//     }
//     }
//   }
// }

// console.log(new TodoList('Joe'))
// console.log(new TodoList('John'))
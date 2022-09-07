// --------------------------------------------- task 1

// const dog = {
//   name: 'Barsik',
//   globalRun: globalRun
// }

// function globalRun() {
//   console.log(`Hi! i'm ${this.name}`)
// }

// dog.globalRun()

// function fncRun() {
//   const dog2 = {
//     name: 'Barsik'
//   };
//   console.log(`Hi! I'm ${dog2.name}`)

// }

// fncRun()
// console.log(dog2)

// function blockRun() {
//   {
//     const dogAge = 5;
//     console.log(dogAge);
//   }
//   console.log(dogAge);
// }

// blockRun()

// --------------------------------------------- task 2

// const car = {
//   name : "Tesla",
//   model : "X",
//  };
  
//  function showCarInfo() {
//     console.log(`It's ${this.name}, model: ${this.model}`);
//  }
//   const carInfo = showCarInfo.bind(car)

//  carInfo();

// --------------------------------------------- task 3

// const cat = {
//   sound: 'meow',
//   greet: function() {
//     setTimeout(function() {
//         console.log(this.sound)
//     },// write fix in this line of code
//     0)
//   }
//  };
//  cat.greet(); // should produce "meow"

// // --------------------------------------------- task 4

// const dog = {
//   sound: 'bark',
//   greet: function() {
//       setTimeout(() => { 
//           console.log(this.sound)
//       },
//       0)
//     }
//  };
  
//  dog.greet();

// --------------------------------------------- task 5

// let convert = {
//   Num: prompt('Enter your number', "")
// }; 
// let fnc = function() {
//   res = this.Num / 1048576;
//   if(isNaN(this.Num)) {
//     alert(`It's not a number!`)
//   }
//   else {
//     alert(res.toFixed(2) + ' Mb')

//   }
//   return fnc
// }

// fnc.call(convert)

// --------------------------------------------- task 6

// const Person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName: function () {
//       const fullName = this.firstName + ' ' + this.lastName;
//       return fullName;
//   }
//  };
  
//  const testArgs = ['sushi', 'hiking']
  
//  let logPersonNameAndInterests = function (...moreArgs) {
//   return this.getFullName() + ' ' + 'loves: ' + moreArgs;
//  }

//  console.log(logPersonNameAndInterests.apply(Person, testArgs));
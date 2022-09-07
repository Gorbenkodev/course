// switch (new Date().getDay()) {
//     case 0:
//         console.log("It's Sunday!");
//         break;
//     case 1:
//         console.log("It's Monday!");
//         break;
//     case 2:
//         console.log("It's Tuesday!");
//         break;
//     case 3:
//         console.log("It's Wednesday!");
//         break;
//     case 4:
//         console.log("It's Thursday!");
//         break;
//     case 5:
//         console.log("It's Friday!");
//         break;
//     case 6:
//         console.log("It's Saturday!");
//         break;
//     default:
//         console.log("It's not a day!");
// }

// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         console.log("It's the weekend! :)")
//         break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Its not the weekend! :(")
//         break;
//     default:
//         console.log("It's not a day!");
// }

// let a = 18;

// if (a >= 18) {
//     console.log("Welcome!");
// }
// else if (a < 18) {
//     console.log("Not!");
// }

// for (let i = 0;i <= 9; i++) {
//     console.log(i);
// }

// const question = 
//     ["Hello", "How's", "your", "day?"];

//     let sentence = "";

// for (let i = 0; i <= question.length - 1; i++) {
//     sentence += question[i];
    
//     if (i !== question.length - 1) {
//         sentence += " ";
//     }
// }

// console.log(sentence);
// ------------------------------------------------------------------- 1
// function printPowsOf2(number) {
//     const arr = [1, 2, 4, 8, 16, 32, 64, 128, 256,]

//     if(typeof number === 'number') {
//         for (let i = 0; i <= number; i++) {
//             if(arr.includes(i)) {
//                 console.log(i);
//                  };
//             };
//         };
//     else {
//         console.log('is not a number')
//     };

// };

// printPowsOf2("302");
// printPowsOf2(null);
// printPowsOf2(128);
// printPowsOf2(60);
// ------------------------------------------------------------------- 2
// function calculateSumOfArray() {
//     let initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
//     let result = initialArray.reduce(function(sum, elem) {
//         if (typeof elem === 'number') {
//             return sum + elem;
//         } else {
//             return sum;
//         }
//     });
//     console.log(result);
// };

    
// calculateSumOfArray();
// ------------------------------------------------------------------------ 3
// let month = ["January", "", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// function printSeasonByMonth(month) {
//     switch(month) {
//         case "January":
//                 console.log("It's Winter")
//             break;
//         case "February":
//                 console.log("It's Winter")
//             break;
//         case "March":
//                 console.log("It's Spring")
//             break;
//         case "April":
//                 console.log("It's Spring")
//             break;
//         case "May":
//                 console.log("It's Spring")
//             break;
//         case "June":
//                 console.log("It's Summer")
//             break;
//         case "July":
//                 console.log("It's Summer")
//             break;
//         case "August":
//                 console.log("It's Summer")
//             break;
//         case "September":
//                 console.log("It's Atumun")
//             break;
//         case "October":
//                 console.log("It's Atumun")
//             break;
//         case "November":
//                 console.log("It's Atumun")
//             break;
//         case "December":
//                 console.log("It's Winter")
//             break;
//         default:
//             console.log("It's not a month");
//     }
//    }
    
//    printSeasonByMonth("September");
//    printSeasonByMonth("November");
//    printSeasonByMonth("July");
//    printSeasonByMonth("April");

// ------------------------------------------------------------------------ 4

// function calculateWordsInString(string) {
//     return string.split(/\s+/).length;
//    }
//    console.log (calculateWordsInString("Easy string for count"));
//    console.log (calculateWordsInString("Easy"));
//    console.log (calculateWordsInString("Some string with a triple   space"));
//    console.log (calculateWordsInString("Some?  string, with a triple   space"));

// const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
 
// let compose = ([...arg]) => x => arg.reduceRight((g,f) => f((g), x));
 
// let modifyArray = (modifyCondition) => (data) => data.filter(arrEl => modifyCondition(arrEl));

// let modifyCondition = (x) => x.length < 4;
 
// let capitalizeAllFirst = compose([arr => testArray.join(' - ').toLowerCase(), modifyArray(modifyCondition)]);
// // console.log(modifyArray(modifyCondition) (testArray)) 

// const allToLower = compose([arr => testArray.join(' - ').toLowerCase(), modifyArray(modifyCondition)]);

// //  console.log(allToLower(testArray))
//  console.log(capitalizeAllFirst(testArray))

// capitalizeAllFirst(testArray) // в консолі 'Result: Custom-Web-And-Mobile-Platforms length: 31'
// allToLower(testArray) // в консолі 'Result: custom - web - and - mobile - platforms length: 39'

// ----------------------------------------------------> Не доработано
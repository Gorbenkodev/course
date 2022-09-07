// ---------------------------------- Array

// const weapons = ["katana", "sword", "shuriken"];

// const things = [1.3, true, undefined, ninja];

// const base = 50;
// const multiAttacks = [base, base * 1.35];

// console.log(multiAttacks);

// const a = [1,2,3];
// const b = [...a];

// console.log(b);

// const [ninja1, ninja2] = ["Hatori", 'Yoshi'];

// console.log(ninja1);
// console.log(ninja2);
// --------------------------------------------------- методы масивов
// .push - Добавляет элемент в конец масива
// .pop - Удаляет элемент из конца масива
// .slice - Берёт определённый кусок из масива
// .concat - Объединяет масивы между собой
// .includes - Проверяет есть ли в масиве элемент

// const skills = ["skulk", "attack"];
// const additinalSkills = ["chop", "seak"];

// skills.push("sneak", "practice");

// console.log(skills);
// console.log(skills.pop());
// console.log(skills);
// console.log(skills.slice(0, 3));
// console.log(skills)
// console.log(skills.concat(additinalSkills))
// console.log(skills.includes("skulk"));
// console.log(skills.includes("seak"));
// ---------------------------------------------------
// forEach() - Будет применяться к каждому элементу масива
// map() - Формирует новый масив с изменёнными значениями
// filter() - Фильтрует масив и возвращает только те элементы которые подходят по условию
// find() - Ищет первый подходящий элемент по условию и останавливается
// every() - Вернёт True только если все элементы соответсвуют условию
// some() - Вернёт True только если хотя бы 1 элемент соответсвует условию
// reduce() - Упрощает все значения масива в 1 значение

// const skills = ["skulk", "attack"];

// skills.forEach((i, j, a) => {
//     console.log(`Елемент:${i}
//     индекс:${j}
//     масив:${a}`)
// });

// skills.forEach(element => {
//     console.log(element.toUpperCase())
// });

// const newArray = skills.map((i) => i.toUpperCase())
// console.log(skills)
// console.log(newArray)

// const newArray = skills.filter((str) => str.includes("a"));

// console.log(newArray);

// const find1 = skills.find((i) => i.includes("a"));
// console.log(find1);

// const find2 = skills.find((i) => i.includes("x"));
// console.log(find2);

// const every1 = skills.every((i)  => i.includes("k"));
// console.log(every1);

// const every2 = skills.every((i)  => i.includes("a"));
// console.log(every2);

// const some1 = skills.some((i)  => i.includes("k"));
// console.log(some1);

// const some2 = skills.some((i)  => i.includes("a"));
// console.log(some2);

// const numbers = [1,2,3,4,5];

// const sum = numbers.reduce((acc, value) => acc + value, 0);
// console.log(sum);

// const sum = numbers.reduce((acc, value) => {
//     if (value >= 3) acc.push(value);
//     return acc;
// }, []);
// console.log(sum);

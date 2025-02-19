const fruit = ["apple", "banana", "orange"];
const newfruit = [...fruit, "mango"];
console.log(newfruit);

const sumAll = (...numbers) => numbers.reduce((acc, num ) => acc + num, 0);
console.log(sumAll(1,2,3,4))
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((num) => num * 2);
console.log(double);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
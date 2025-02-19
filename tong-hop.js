const processArray = (arr) => {
    const double = arr.map((num) => num *2)
    const filtered = double.filter((num) => num > 5)
    const total = filtered.reduce((acc, num) => acc + num, 0)
    return total
};
console.log(processArray([1, 2, 3, 4]))
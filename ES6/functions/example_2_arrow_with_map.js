const numbers = [2, 4, 6];

// Map over this array and double the each element in the array.
const numbersNew = numbers.map(function(number) {
    return number * 2;
});

const numbersNew2 = numbers.map(number => {
    return number * 2;
});

const numbersNew3 = numbers.map(number => number * 2);

console.log(numbersNew);
console.log(numbersNew2);
console.log(numbersNew3);
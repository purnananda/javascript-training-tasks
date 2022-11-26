// Square: multiply the given number by itself
// Normal function
const square = function (a) {
    return a * a;
}

// Basic arrow function or fat arrow function (equals '=' and greater then '>' symbols)
const square2 = (a) => {
    return a * a;
}

// single statement or expression
// Arrow function which remove the curly braces {} and the return keyword.
// Remember: cannot drop return statements and curly braces {} when more then one statements or expressions.
const square3 = (a) => a * a;

// Single argument
// Arrow function which omit parentheses.
// Remember: cannot drop parentheses when there is no argument or more then one arguments.
const square4 = a => a * a;

console.log('(square) - square of 5 is: ', square(5))
console.log('(square2) - square of 5 is: ', square2(5))
console.log('(square3) - square of 5 is: ', square2(5))
console.log('(square4) - square of 5 is: ', square2(5))


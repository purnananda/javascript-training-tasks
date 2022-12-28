// addition using the rest parameter
const sum2 = (...args) => {
    let  result = 0;

    for(let i = 0; i < args.length; i++) {
        result += args[i];
    }

    return result;
}

console.log("Sum2: ", sum2(10, 20, 30, 40));
const Calc = () => {
    return {
        Add: (a, b) => {
            return a + b;
        },
    };
};

var obj = new Calc();
console.log(obj.Add(5, 6));
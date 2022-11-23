const employees = [{name: 'Ram'}, {name: 'Shyam'}, {name: 'Hari'}];

let newEmps = employees.forEach(x => {
    x.name = x.name + 'HH';
    console.log(x);
    return x;
})

console.log('ForEach: ', newEmps);
console.log('Employees: ', employees);

let newEmps2 = employees.map(x => {
    x.name = x.name + 'HH';
    console.log(x);
    return x;
})

console.log('Map: ', newEmps2);
console.log('Employees: ', employees);

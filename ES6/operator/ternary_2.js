const greeting = (person) => {
    const name = (person?.name) ? person.name : "stranger";
    return `Hello ${name}`;
}

console.log(greeting({name: "Steve"}))
console.log(greeting(null))


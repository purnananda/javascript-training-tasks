var person = {
    name: "Raja",
    address: {
        city: "Hyderabad",
        country: "India",
    },
};

// var name = person.name;
// var foo = person.address.city;
// var bar = person.address.country;

const {name, address: {city, country}} = person;

console.log(name);
console.log(city);
console.log(country);




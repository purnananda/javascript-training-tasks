// Inside a regular function, this keyword refers to the function where it is called.
// With arrow functions the this keyword always represents the parent scope, 
// as Arrow function doesnot have its own this.
const team = {
    players : ['Virat', 'Dhoni', 'Rohit'],
    name : 'India', 
    getSummary: function() {
        return this.players.map((player) => {
            return `${player} is from team ${this.name}`;
        })
    },
};

console.log(team.getSummary())
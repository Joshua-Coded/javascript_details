// function call 
const person = {
    age: 30
};

let birthDate = function(){
    this.age++;
};

// console.log(person.age);
// birthDate(person);
// console.log(person.age)

// the call method
console.log(person.age);
birthDate.call(person);
console.log(person.age)
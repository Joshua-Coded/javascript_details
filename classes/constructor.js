//constructor function in javascript

class Person {
    name;
    age;

    constructor(pName, age) 
    {
        this.name = pName;
        this.age = age;
    }
}

let person1 = new Person("John Smith", 54);
let person2 = new Person("William Smith", 60);
let person3 = new Person("John Doe", 39);

console.log(person1);
console.log(person2);
console.log(person3);


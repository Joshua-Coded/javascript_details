// function template

// function singSong() {
//     console.log('done');
//     console.log('done');
//     console.log('done');
//     console.log('done');
// }

// function with arguments parameters

// function greet(person) {
//     console.log(`Firstname is: ${person}`)
// }

// assignment
/*
Define a function called rant which accepts a string argument called message. 
 The function should print out an uppercased version of message 3 times 
 (with 3 separate calls to console.log).
For example, rant("I hate beets") should print
*/

// function rant(message) {
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }
// rant("i hate beets");


// functino for creating simple interest


// function simpleInterest(p, r, t)


function simpleInterest(p, r, t) {
    let si = (p * r * t) / 100;
    return si;
};

// execution

console.log(simpleInterest(1000, 5, 2));
console.log(simpleInterest(1000, 6.7, 3));
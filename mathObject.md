these contains properties and methods for mathematical constants and functions.
Math.PI();
Math.round();
Math.floor();
Math.abs();
Math.pow();
Math.ceil();
Math.random(); gives us a random decimal between 0 and 1.

cerating random integers

const step1 = Math.random();
const step2 = step1 * 10
const step3 = Math.floor(step2);
const step4 = step3 + 1;


all in a line

Math.floor(Math.random() * 10 ) + 1;
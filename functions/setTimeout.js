// setTimeout function

function sayHello()
 {
    console.log('Hello');
}

function sayGoodbye() {
    console.log('Goodbye');
}

sayHello();
setTimeout(sayGoodbye, 5 * 1000);
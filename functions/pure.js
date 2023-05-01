// pure functions

// function isValidLogin(username, password){
//     if(username == "joshua" && password == 12345)
//     return true;
//     else
//     return false;
// }

// console.log(isValidLogin("joshua", 12345));

// callback functions

function callBack1(name, age){
    console.log(`Name is ${name}, age is ${age}`)
}

function callBack2(name) {
    console.log(`Name is ${name}`)
}

function doWork(name, age) {
    name = "Doc" + name;
    age++;
    callBack2(name)
}
doWork("Joshua", 21);
// pure functions

// function isValidLogin(username, password){
//     if(username == "joshua" && password == 12345)
//     return true;
//     else
//     return false;
// }

// console.log(isValidLogin("joshua", 12345));

// callback functions

// function callBack1(name, age){
//     console.log(`Name is ${name}, age is ${age}`)
// }

// function callBack2(name) {
//     console.log(`Name is ${name}`)
// }

// function doWork(name, age, myFunctionRef) {
//     name = "Doc" + name;
//     age++;
//     myFunctionRef(name, age)
// }
// doWork("Joshua", 21, callBack2);


function myGender(boy, girl) {
    console.log(`Gender is ${boy}, and  ${girl}`)
}

function singleGender(boy){
    console.log(`Gender is ${boy}`)
}

function getGender(boy, girl, gender){
    boy = "He" + "" + boy;
    girl = "She" + "" + girl;
    gender(boy, girl)
}

getGender("Alana", "Lydia", myGender)
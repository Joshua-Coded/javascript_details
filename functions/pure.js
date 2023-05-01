// pure functions

function isValidLogin(username, password){
    if(username == "joshua" && password == 12345)
    return true;
    else
    return false;
}

console.log(isValidLogin("joshua", 12345));
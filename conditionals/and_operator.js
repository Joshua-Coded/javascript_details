const password = prompt("Enter your password");

if(password.length >= 6  && password.indexOf(" ") === -1) {
    console.log("valid password".toUpperCase());
} else {
    console.log("Invalid password!".toUpperCase());
}

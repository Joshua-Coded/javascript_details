
const password = prompt("Enter a new password");

// password must be 6+ characters


if (password.length >= 6) {

    // password cannot include spaces
if (password.indexOf(" ") === -1) {
    console.log("valid password".toUpperCase ());
} else {
    console.log("bad password! spaces not allowed in password".toUpperCase ());
}
} else {
console.log("Password must be at least 6 characters".toUpperCase());
}


const age = parseInt(prompt("Enter your age!!!"));

if (! (age >= 0 && age <= 5  || age >= 65)) {
    console.log("you are not a baby or a senior".toUpperCase())
}

// 0-5 free
// 5-10 you pay $10
// 10-65 you pay $20
// 65+ you are a senior, free

const age = parseInt(prompt("Enter your age!!"));
if (age >= 0 && age < 5 || age >= 65){
    console.log("you get in for free".toUpperCase())
    console.log(age)
} else if (age >= 5 && age < 10) {
    console.log("you are a child, you pay $10".toUpperCase())
    console.log(age)
} else if (age >= 10 && age < 65) {
console.log("you are a adult, you pay $20".toUpperCase())
console.log(age)
} else {
    console.log("you cann't enter a negative number".toUpperCase())
}
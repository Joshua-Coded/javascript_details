// const dayOfWeek = "Friday";

// if(dayOfWeek === "Monday") {
//     console.log("i hate mondays")
// }
// else if(dayOfWeek === "Saturday") {
//     console.log("i love saturdays")
// }
// else if(dayOfWeek === "Friday") {
//     console.log("i love Fridays, they are decent after work.")
// }

// 0-5 - free
// 5-10 - child $10
// 10-65 - adults $20
// 65+ - senior $10

const age = 70;

if (age < 5) {
    console.log("you are a baby, you get in for free")
} else if (age < 10) {
    console.log("you are a child, you pay $10")
} else if (age < 65) {
    console.log("you are an adult, you pay $20")
} else if (age > 65 ){
    console.log("you are a senior, you pay $10")
}
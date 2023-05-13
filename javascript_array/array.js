//Arrays

const prices = [23, 43,22,44,13,32, 89,45,65]
console.log(prices.length)

console.log("Element using loops...");

for (let i = 0; i < prices.length; i++){
    console.log(prices[i])  
}

// array of objects
console.log("Array of objects ");

const students = [
    {
        studentName: "JOHN", age: 32
    },

    {
        studentName: "Jones", age: 12
    },

    {
        studentName: "Smith", age: 13
    },

    {
        studentName: " William", age: 56
    }
]
console.log(students.length)
for (let i = 0; i < students.length; i++){
    console.log(`StudentName: ${students[i].studentName},
    studentAge: ${students[i].age}`);
}
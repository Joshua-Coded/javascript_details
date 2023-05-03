const student1 = {
    name: 'Student',
    age: 13,
    section: 'A'
};

const student2 = {
    name: 'Teacher',
    age: 20,
    section: 'B'
};

function calculateTotalMarks(subject1, subject2,subject3) {
    let totalMarks = subject1 + subject2 + subject3;
    let messages = `Hello ${this.name}, your total marks is ${totalMarks}`;
    console.log(messages);
}

let calculate = calculateTotalMarks.bind(student1);
calculate(20, 32, 74754);

let calculate2 = calculateTotalMarks.bind(student2);
calculate2(43, 545,656);
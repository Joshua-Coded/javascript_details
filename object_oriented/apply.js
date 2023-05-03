// the apply keywords
const student = {
    name: "Smith",
    section: "A"
};

function calculateTotalMarks(subject1, subject2, subject3) {
    let totalMarks = subject1 + subject2 + subject3;
    let messages = `Hey ${this.name}, your total marks is ${totalMarks}`;
    console.log(messages);
}

calculateTotalMarks.apply(student, [90, 100, 30])

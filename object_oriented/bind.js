const student1 = {
    name: "John",
    section: "B"
};

const student2 = {
    name: "John",
    section: "B"
};

// our method function

function calculateStudentMarks(subject1, subject2, subject3) {
    let totalMarks = subject1 + subject2 + subject3;
    let messages = `Hello ${this.name}, Your total marks is ${totalMarks}`;
    console.log(messages);
}

const calculate = calculateStudentMarks.bind(student1);
calculate(40, 80, 100);


const calculate2 = calculateStudentMarks.bind(student2);
calculate2(50, 90, 130);
// calculateStudentMarks.apply(student2, [40, 80, 100]);
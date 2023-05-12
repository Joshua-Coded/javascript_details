// class inheritance

// parent class
class Teacher {
    teacherName;


    constructor(teacherName){
        this.teacherName = teacherName;
    }
}


// child class

class PhysicsTeacher extends Teacher {
    mainSubject;


    constructor(mainSubject){ 
        super("JOHN DOE");
        this.mainSubject = mainSubject;
    }
}


// object  of parent class
let teacher = new Teacher("Scott");
console.log(teacher);

// object of child classes
let student = new PhysicsTeacher("Biology");
console.log(student);
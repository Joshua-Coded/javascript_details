const student = {};  // empty object

student.marks = 23;
student.getResults = function(){
    // check if stdudent passed 
    if(this.marks >= 35)
    return "Passed " + student.marks;
    else
    return "Failed " + student.marks;
    
};


console.log(student.getResults());

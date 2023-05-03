// Object with properties and methods
const employee = {
    firstName: 'John',
     lastName: 'Smith',
      designation: 'clerk', 
      salary: 10000,
      workExperienceYears: 4,
      // getFullName method
getFullName: function(){
    return `${this.firstName} ${this.lastName}`;
},

promote: function(){
    let isEligibleForPromotion;
    if(this.designation == 'clerk')
    {
        if(this.workExperienceYears >= 3) {
            isEligibleForPromotion = true;
            this.designation = 'Asst.Manager';
            this.salary = this.salary + (this.salary * 10 / 100);
        }
        else {
            isEligibleForPromotion = false;
        }
    }

    // Asst Manager to manager
    else if(this.designation == 'Asst.Manager'){
        if(this.workExperienceYears >= 5){
            isEligibleForPromotion = true;
            this.designation = 'Manager';
            this.salary = this.salary + (this.salary * 20 / 100);
        }
        else {
            this.isEligibleForPromotion = false;
        }
    }
    
    return isEligibleForPromotion;
} // end function
    };

console.log(employee)
console.log(employee.firstName)
console.log(employee.lastName)
console.log(employee.designation)
console.log(employee.workExperienceYears)
console.log(employee.getFullName())
if(employee.promote() == true)
{
    console.log("Congratulations! You have been successfully promoted")
    console.log("Your Salary has been Updated!!! " + employee.salary);
    console.log("Desination has been updated!!! " + employee.designation);
}
else {
    console.log("You are not allowed for Promotion")
}


// method 
// classes and object in javascript.

class Employee
{
    empId;
    empName;
    salary;


    getEmployeeName()
    {
        return this.empName;
    }

    getSalary(amount){
        this.salary = this.salary + amount;
    }
} 

let employee1 = new Employee();
employee1.empId = 123;
employee1.empName = "Smith";
employee1.salary = 1000;
console.log(employee1);
console.log(employee1.getEmployeeName());
employee1.getSalary(2000);
console.log(employee1);
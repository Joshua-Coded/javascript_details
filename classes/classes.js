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
employee1.getSalary(2000);
console.log(employee1);

let employee2 = new Employee(); // second object for our classes
employee2.empName = "John";
employee2.salary = 7000;
employee2.empId = 232;
employee2.getSalary(4000);
console.log(employee2);
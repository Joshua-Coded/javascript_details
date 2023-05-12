// set and get methods
/*
    class Person
      -PersonName
      -age



      -setPersonName()
      -getPersonName()

      -setAge()
      -getAge()
*/


class Person {
    #personName;
    #age;
    #title = "Mr.";

    // personName - set and get
   set PersonName(value) {
        // requirements: 1 person name can't be empty or null
        if(value == null || value == undefined){
            console.error("Name is null and not allowed");
        }

        else {
            if(value.length >= 30){
                console.error("Name length can't exceed 30 characters");
             
            }
            else {
                this.#personName = value;
            }
}
}
// end of set method

    get PersonName() {
            return `${this.#title} ${this.#personName}`;
    }

    // age set method

    set Age(value) {
        if(value >= 0 && value <= 100) {
            this.#age = value;
        }
        else {
            console.error("Age is invalid, it must be between 0 and 100");
        }
    }
        // get method for age
        get Age() {
            return this.#age;
        }
} // end of class


// create a new object

let person1 = new Person();
person1.PersonName = "JOHN SMITH";
person1.Age = 30;
console.log(person1.PersonName, person1.Age);
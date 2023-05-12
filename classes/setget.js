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

    // personName - set and get
    setPersonName(value) {
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

    getPersonName() {
            return this.#personName
    }

    // age set method

    setAge(value) {
        if(value >= 0 && value <= 100) {
            this.#age = value;
        }
        else {
            console.error("Age is invalid, it must be between 0 and 100");
        }
    }
        // get method for age
        getAge() {
            return this.#age;
        }
} // end of class


// create a new object

let person1 = new Person();
person1.setPersonName("JOHN SMITH"); 
person1.setAge(30);
console.log(person1.getPersonName(), person1.getAge());

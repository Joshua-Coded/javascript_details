// private properties and methods

class Customer {
    customerId;
    customerName;
    #creditCardNumber;

    
    constructor(customerId, customerName, creditCardNumber) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.#creditCardNumber = creditCardNumber;
    }

    getCreditCardNumber() {
        return this.#creditCardNumber;
}
}

let customer1 = new Customer(123, "Smith", 234346564534);
console.log(customer1);
console.log(customer1.getCreditCardNumber());

const Employee = require ('./employee');

// manager class extends vehicle class

// adds office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        // returns role of 'manager'
        this.role = 'Manager';
    }
}

console.log(`${new Manager('foo', 99).id}`)
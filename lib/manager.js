const Employee = require ('./employee');

// manager class extends employee class

// adds office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        // returns role of 'manager'
        this.role = 'Manager';
    }
    getOffice() {
        return this.officeNumber;
    }
}
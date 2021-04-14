const Employee = require ('./employee');

// engineer class extends employee class

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    
    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
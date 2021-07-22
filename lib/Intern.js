// Import Employee class.
const Employee = require('./Employee.js');

// Extend Employee class to Intern.
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


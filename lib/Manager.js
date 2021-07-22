module.exports = function(data) {

    // Import Employee class.
    const Employee = require('./Employee.js');

    // Extend Employee class to Manager.
    class Manager extends Employee {
        constructor(name, id, email, officeNumber) {
            super(name, id, email);
            this.officeNumber = officeNumber;
            this.role = 'Manager';
        }

        getRole() {
            return this.role;
        }
        
        getOfficeNumber() {
            return this.officeNumber;
        }

    }

    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    return(manager);
}


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
  
        getOfficeNumber() {
            return this.officeNumber;
        }

        getRole() {
            return this.role;
        }

    }

    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    manager.getOfficeNumber();

    return(manager);
}


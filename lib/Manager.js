module.exports = function(data) {

    // Import Employee class.
    const Employee = require('./Employee.js');

    // Extend Employee class to Manager.
    class Manager extends Employee {
        constructor(name, email, id, officeNum, role) {
            super(name, email, id);
            this.role = 'Manager';
            this.officeNum = officeNum;
        }

        getOfficeNumber() {
            return(this.officeNum);
        }

        getRole() {
            return(this.role);
        }

    }



    const manager = new Manager(data.name, data.email, data.id, data.officeNum, data.role);

    return(manager);
}

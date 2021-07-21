module.exports = function(data) {

    // Import Employee class.
    const Employee = require('./Employee.js');

    // Extend Employee class to Intern.
    class Intern extends Employee {
        constructor(name, email, id, school, role) {
            super(name, email, id);
            this.role = 'Intern';
            this.school = school;
        }

        getSchool() {
            return(this.school);
        }

        getRole() {
            return(this.role);
        }

    }

    const intern = new Intern(data.name, data.email, data.id, data.school, data.role);

    return(intern);
}


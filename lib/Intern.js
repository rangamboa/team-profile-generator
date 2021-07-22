module.exports = function(data) {

    // Import Employee class.
    const Employee = require('./Employee.js');

    // Extend Employee class to Intern.
    class Intern extends Employee {
        constructor(name, id, email, school) {
            super(name, id, email);
            this.school = school;
            this.role = 'Intern';
        }
   
        getRole() {
            return this.role;
        }

        getSchool() {
            return this.school;
        }
    }

    const intern = new Intern(data.name, data.id, data.email, data.school);  
    return(intern);
}


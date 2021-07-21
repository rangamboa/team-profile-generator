module.exports = function(data) {

    // Import Employee class.
    const Employee = require('./Employee.js');

    // Extend Employee class to Engineer.
    class Engineer extends Employee {
        constructor(name, email, id, github, role) {
            super(name, email, id);
            this.role = 'Engineer';
            this.github = github;
          }
    }

    const engineer = new Engineer(data.name, data.email, data.id, data.github, data.role);

    return(engineer);
}


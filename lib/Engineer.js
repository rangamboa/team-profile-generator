module.exports = function(data) {

    // Import Employee class.
    const Employee = require('./Employee.js');

    // Extend Employee class to Engineer.
    class Engineer extends Employee {
        constructor(name, id, email, github) {
            super(name, id, email);
            this.github = github;
            this.role = 'Engineer';
        }

        getGithub() {
            return this.github;
        }

        getRole() {
            return this.role;
        }

    }

    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    engineer.getGithub();
    
    return(engineer);


}


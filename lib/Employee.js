const inquirer = require('inquirer');

console.log('----- This is employee.js');

// Define and export the Employee class.
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = 'Employee';
    }
  
    printInfo() {
        console.log(`Employee Name ${this.name}`);
        console.log(`Employee ID ${this.id}`);
        console.log(`Employee Email ${this.email}`);
        console.log(`Employee Role ${this.role}`);
    }
}

function employee(data) {

    inquirer
    // Create a generic non-role employee.
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Please enter your Name.',
        },
        {
            name: 'email',
            type: 'input',
            message: 'Please enter your Email Address.',
        },
        // {
        //     name: 'role',
        //     type: 'list',
        //     message: 'What is your Role on the Team?',
        //     choices: ['Manager', 'Engineer', 'Intern'],
        // },
    ])

    .then((answers) => {

        // Set employee ID number, then increment for next employee.
        answers.id = idCount;
        idCount++;
        
        // Set universal team role to "Employee"; this is changed later.
        answers.role = 'Employee';

        console.log(answers);
    });
}

module.exports = Employee;
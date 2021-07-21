// This application requires these packages.
const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = require('./util/generateHtml.js');
const Manager = require('./lib/Manager.js');

// const generateHtml = require('./lib/Engineer.js');
// const generateHtml = require('./lib/Intern.js');
// const employee = require('./lib/Employee.js');

// Boolean to keep track of whether the manager information has been entered yet or not.
let mgrInput;

// A variable to assign a unique employee ID.
let idCount;
const team = [];
let data;

// Reset values upon launch.
function init() {

    // Initialize this value to false the first time the app is run.
    mgrInput = false;

    // Initialize employee ID nubmer to 1.
    idCount = 1;

    generateEmployee();
}

const generateEmployee = () => {

    console.log('\n-----')
    console.log('Welcome to the Web Dev Team Profile Generator!');

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
            {
                name: 'role',
                type: 'list',
                message: 'What is your Role on the Team?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])

        .then((answers) => {

            // Set employee ID number, then increment for next employee.
            answers.id = idCount;
            idCount++;
            
            // Set universal team role to "Employee"; this is changed later.
            answers.role = 'Employee';

            //console.log(answers);
        });

        // Check to see if manager info has been entered. If not, this employee is assumed to be the manager.
        console.log(mgrInput);
        if (mgrInput == false) {

            // Set mgrInput to true since there is only one manager on the team.
            mgrInput = true;

            inquirer
            .prompt([
                {
                    name: 'officeNum',
                    type: 'input',
                    message: 'Please enter your Office Number.',
                }
            ])
            .then((answers) => {
                    
                    console.log(answers.officeNum);
                    console.log(answers);
                    data = answers;
            });
            //Manager(answers); 

};

// Call init() upon application launch.
init();

            
            // fs.writeFile('./dist/team.html', generateHtml(answers), (err) =>
            // err ? console.log(err) : console.log('Successfully generated team page.')
            // );
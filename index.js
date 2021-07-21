// This application requires these packages.
const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = require('./util/generateHtml.js');

// const employee = require('./lib/Employee.js');
// const Manager = require('./lib/Manager.js');
// const engineer = require('./lib/Engineer.js');
// const intern = require('./lib/Intern.js');

// Set incrementally increasing variable for unique employee ID.
let idCount;

// Set empty team array.
const team = [];

// Reset values upon launch.
function init() {

    console.log('\n----- Welcome to the Web Dev Team Profile Generator!');

    // Initialize employee ID number to 1.
    idCount = 0;

    // Call function to generate first employee.
    generateEmployee();
}

const generateEmployee = () => {

    // Increment IC number.
    idCount++;

    console.log('\nEmployee ID #' +idCount);
    
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                prefix: '-',
                message: 'Please enter your name.',
            },
            {
                name: 'email',
                type: 'input',
                prefix: '-',
                message: 'Please enter your email address.',
            },
            {
                name: 'role',
                type: 'list',
                prefix: '-',
                message: 'What is your role on the team?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
            {
                name: 'officeNum',
                type: 'input',
                prefix: '-',
                message: 'Please enter your office number.',
                when: (answers) => answers.role === 'Manager',
            },
            {
                name: 'github',
                type: 'input',
                prefix: '-',
                message: 'Please enter your GitHub profile name.',
                when: (answers) => answers.role === 'Engineer',
            },
            {
                name: 'school',
                type: 'input',
                prefix: '-',
                message: 'Please enter your school.',
                when: (answers) => answers.role === 'Intern',
            },
            {
                name: 'moreStaff',
                type: 'confirm',
                prefix: '-',
                message: 'Are there any more members of your team?',
            },
        ])
        .then((answers) => {

            // Assign ID to employee.
            answers.id = idCount;

            // console.log(answers);

            // Add employee to team array.
            team.push(answers);
            console.log(team);

            if (answers.moreStaff) generateEmployee();
            




        });
};

// Write team info to HTML page.
function generateTeamPage() {

    fs.writeFile('./dist/team.html', generateHtml(team), (err) =>
    err ? console.log(err) : console.log('Successfully generated team profile page.')
    );
}

// Call init() upon application launch.
init();
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

    console.log('\n-----')
    console.log('Welcome to the Web Dev Team Profile Generator!');

    // Initialize employee ID number to 1.
    idCount = 0;

    // Call function to generate first employee.
    generateEmployee();
}

const generateEmployee = () => {

    console.log(idCount);
    idCount++
    console.log(idCount);
    
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Please enter your name.',
            },
            {
                name: 'email',
                type: 'input',
                message: 'Please enter your email address.',
            },
            {
                name: 'role',
                type: 'list',
                message: 'What is your role on the team?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
            {
                name: 'officeNum',
                type: 'input',
                message: 'Please enter your office number.',
                when: (answers) => answers.role === 'Manager',
            },
            {
                name: 'github',
                type: 'input',
                message: 'Please enter your GitHub profile name.',
                when: (answers) => answers.role === 'Engineer',
            },
            {
                name: 'school',
                type: 'input',
                message: 'Please enter your school.',
                when: (answers) => answers.role === 'Intern',
            },
            {
                name: 'more',
                type: 'confirm',
                message: 'Are there more members of your team?',
            },
        ])
        .then((answers) => {

            answers.id = idCount;
            // console.log(answers);

            team.push(answers);

            console.log(team);

            if (answers.more) generateEmployee();





        });
};

// Writes team info to HTML page.
function generateTeamPage() {

    fs.writeFile('./dist/team.html', generateHtml(team), (err) =>
    err ? console.log(err) : console.log('Successfully generated team profile page.')
    );
}

// Call init() upon application launch.
init();
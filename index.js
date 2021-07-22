// This application requires these packages.
const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = require('./util/generateHtml.js');

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

    // Increment ID number.
    idCount++;

    console.log('\nEmployee #' +idCount);
    
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
                name: 'officeNumber',
                type: 'number',
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

            if (answers.role === 'Manager') {
                let manager = require('./lib/Manager.js')(answers);

                // Add employee to team array.
                team.push(manager);
            }

            if (answers.role === 'Engineer') {
                let engineer = require('./lib/Engineer.js')(answers);

                // Add employee to team array.
                team.push(engineer);
            }

            if (answers.role === 'Intern') {
                let intern = require('./lib/Intern.js')(answers);

                // Add employee to team array.
                team.push(intern);
            }

            // console.log('\n----- Team now consists of:')
            // console.log(team);

            // Restart function if there are more people to add.
            if (answers.moreStaff) generateEmployee();

            // If team is complete, call function to generate team page.
            else generateTeamPage();

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
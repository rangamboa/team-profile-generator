// This application requires these packages.
const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = require('./util/generateHtml.js');

// const generateHtml = require('./lib/Engineer.js');
// const generateHtml = require('./lib/Intern.js');
// const generateHtml = require('./lib/Manager.js');


const init = () => {

    console.log('\n-----')
    console.log('Welcome to the Web Dev Team Profile Generator!');

    inquirer

        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Please enter your Name.',
            },
            {
                name: 'id',
                type: 'number',
                message: 'Please enter your Employee ID?',
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

            const manager = answers;

            console.log(manager);

            const employee = require('./lib/Employee.js');

            // fs.writeFile('./dist/team.html', generateHtml(answers), (err) =>
            // err ? console.log(err) : console.log('Successfully generated team page.')
            // );

        });

};

// Call init() upon application launch.
init();
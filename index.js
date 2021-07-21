// This application requires these packages.
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./util/generateHtml.js');


const init = () => {

    inquirer

        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'checkbox',
                message: 'What languages do you know?',
                name: 'stack',
                choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
            },
            {
                type: 'list',
                message: 'What is your preferred method of communication?',
                name: 'contact',
                choices: ['email', 'phone', 'telekinesis'],
            },
        ])

        .then((answers) => {

            fs.writeFile('./dist/team.html', generateHtml(answers), (err) =>
            err ? console.log(err) : console.log('Successfully generated team page.')
            );

        });

};

// Call init() upon application launch.
// init();
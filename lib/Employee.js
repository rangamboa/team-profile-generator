const inquirer = require('inquirer');

console.log('----- This is employee.js');

// Define and export the Employee class.
class Employee {
    constructor(id, name, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

const generateEmployee = () => {

    inquirer
        // Create a generic non-role employee.

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
        ])

        .then((answers) => {

            // Calls imported function to handle license badge and language data, as these take up considerable space.
            const data = generateMarkdown(answers.projLic);

            // Assigns returned data from the function to the answers array.
            answers.projLicBadge = data[0];
            answers.projLicTxt = data[1];

            // Inserts user input into the pre-made README.md file and saves it.
            fs.writeFile('README.md', generateREADME(answers), (err) =>
            err ? console.log(err) : console.log('Successfully generated readme.md'));
        })
};


module.exports = Employee;
const inquirer = require('inquirer');

// Import Employee data.
const Employee = require('./Employee.js');

// // Define and export the Manager class.
// class Manager extends Employee {
//     constructor(officeNum) {
//         super(name, id, email);
//         this.color = color;
//         this.passengers = passengers;
//       }
// }

// Import generic employee data.
async function Manager(data) {

    console.log('----- this is manager.js');
    console.log(data);

 

    console.log(await data.officeNum)

}

module.exports = Manager;



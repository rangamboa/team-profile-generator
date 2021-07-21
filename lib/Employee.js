// Define and export the Employee class.

console.log('----- This is employee.js');

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = 'Employee';
    }
  
    printInfo() {
      console.log(`Employee ID ${this.id}`);
      console.log(`Employee Name ${this.name}`);
      console.log(`Employee Email ${this.email}`);
      console.log(`Employee Role ${this.role}`);
    }
}

module.exports = Employee;
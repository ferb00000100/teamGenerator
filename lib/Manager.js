const Employee = require("../lib/Employee");

class Manager extends Employee {
	constructor(employeeId, firstName, lastName, title, email, officeNumber) {
		super(employeeId, firstName, lastName, title, email, officeNumber);
		this.role = 'Manager';
	}
	getRoll(){
		return this.role;
	}

}

module.exports = Manager;
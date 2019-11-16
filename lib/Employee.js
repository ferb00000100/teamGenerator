// Employee Class

class Employee {
	constructor (employeeId, firstName, lastName, title, email, officeNumber) {
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.title = title;
		this.email = email;
		this.officeNumber = officeNumber;
	}

	getId(){
		return this.employeeId;
	}

	getTitle(){
		return this.title;
	}

	getEmail(){
		return this.email;
	}

	getOfficeNumber(){
		return this.officeNumber;
	}

}


module.exports = Employee;
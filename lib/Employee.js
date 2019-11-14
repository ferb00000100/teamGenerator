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

	set fullName(fullName){
		let nameParts = fullName.split(' ');
		this.firstName = nameParts[0];
		this.lastname = nameParts[1];
	}

	fullName(){
		return this.firstName + ' ' + this.lastName;
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
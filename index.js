const inquirer = require("inquirer")
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function getEmployee () {
	return inquirer.prompt([
		{
			type: "input",
			name: "employeeId",
			message: "What is your employee id?"
		},
		{
			type: "input",
			name: "firstName",
			message: "What is your first name?"
		},
		{
			type: "input",
			name: "lastName",
			message: "What is your last name?"
		},
		{
			type: "input",
			name: "email",
			message: "What is your email address?"
		},
		{
			type: "input",
			name: "officeNumber",
			message: "What is your office number?"
		},
		{
			type: "list",
			name: "title",
			message: "What is your title",
			choices: ["Manager", "Engineer", "Intern"],
		},
		{
			name: "school",
			type: "input",
			message: "What school do you attend?",
			when: function ( answers ){
				return answers.title === "Intern";
			}
		},
		{
			name: "github",
			type: "input",
			message: "What is your github username?",
			when: function ( answers ){
				return answers.title === "Engineer";
			}
		}
	]);
}

async function init() {


		const employee = await getEmployee();
		const employeeId = employee.employeeId;
		const firstName = employee.firstName;
		const title = employee.title;
		const lastName = employee.lastName;
		const email = employee.email;
		const number = employee.officeNumber;
		const github = employee.github;
		const school = employee.school;

		if (title === 'Manager') {
			let test = new Manager(employeeId, firstName, lastName, title, email, number)
			console.log(test);
		}
		if (title === 'Intern') {
			let test = new Intern(employeeId, firstName, lastName, title, email, number, school)
			console.log(test);
		}
		if (title === 'Engineer') {
			let test = new Engineer(employeeId, firstName, lastName, title, email, number, github)
			console.log(test);
		}

}

init();
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);
const inquirer = require("inquirer")
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const generateHTML = require("./generateHTML");
const generateManagerHTML = require("../generateManagerHTML.js");
const generateCSS = require("../generateCSS");

//TODO find the current employee ID and start at the next number
let employeeId = 0;

// Prompts user for employee questions
function getEmployee () {
	return inquirer.prompt([
		{
			type: "list",
			name: "title",
			message: "What is your title",
			choices: ["Manager", "Engineer", "Intern"],
		},{
			name: "team",
			type: "list",
			message: "What team do you manage",
			choices: ["Engineering", "Interns"],
			when: function ( answers ){
				return answers.title === "Manager";
			}
		},{
			type: "input",
			name: "firstName",
			message: "What is your first name?"
		},{
			type: "input",
			name: "lastName",
			message: "What is your last name?"
		},{
			type: "input",
			name: "email",
			message: "What is your email address?"
		},{
			type: "input",
			name: "officeNumber",
			message: "What is your office number?"
		},{
			name: "school",
			type: "input",
			message: "What school do you attend?",
			when: function ( answers ){
				return answers.title === "Intern";
			}
		},{
			name: "github",
			type: "input",
			message: "What is your github username?",
			when: function ( answers ){
				return answers.title === "Engineer";
			}
		}
	]);
}



// Initial function to grab all the answers and invoke methods to build html
async function init() {

// Add Manager
	function addManager(employeeId,firstName, lastName, title, email, number, team) {
		// let managers = [];
		let manager = new Manager(employeeId, firstName, lastName, title, email, number, team);
		let fullName = manager.fullName();
		let i = 0;

		managers.push(employeeId, fullName, title, email, number, team);
		// console.log(managers);
		// arrayToObject = (arr) =>
		// Object.assign({},...arr.map(item => ({[i++]: item})));
		// managers.join(' ');

		// let myjson = arrayToObject(managers);
		// console.log(arrayToObject(managers))
		// appendFileAsync("managers.json", arrayToObject(myjson));

		start();
		console.log(managers);

		// return(managers)
		// let html = generateManagerHTML(fullName, title, employeeId, number, team);
		// console.log(html);
		// appendFileAsync("indexManagers.html", html);
		// writeFileAsync("index.html", html);
	}

	employeeId += 1;
	const employee = await getEmployee();
	const firstName = employee.firstName;
	const title = employee.title;
	const lastName = employee.lastName;
	const email = employee.email;
	const number = employee.officeNumber;
	const github = employee.github;
	const school = employee.school;
	const team = employee.team;
	let managers = [];


//TODO how to add html while it loops and not override HTML

		if (title === 'Manager') {

			// manager = addManager(employeeId, firstName, lastName, title, email, number, team);
			addManager(employeeId,firstName, lastName, title, email, number, team);
			// console.log('manager is ' + manager);
			// const manager = new Manager(employeeId, firstName, lastName, title, email, number, team);
			// const fullName = manager.fullName();
			// const html = generateHTML(fullName, title, employeeId, number, team);
			// await writeFileAsync("index.html", html);
				// const css = generateCSS();
			// await writeFileAsync("assets/css/style.css", css);
			// await writeFileAsync("index.html", html);
		}
		if (title === 'Intern') {
//TODO Need to figure out how to write to a different spot of HTML with the same varialbe names???
			const intern = new Intern(employeeId, firstName, lastName, title, email, number, school)
			const fullName = intern.fullName();
			const html = generateHTML(fullName, title, employeeId, school);
			await writeFileAsync("index.html", html)
		}
		if (title === 'Engineer') {
			let test = new Engineer(employeeId, firstName, lastName, title, email, number, github)
			console.log(test);
		}

		// console.log(managers);
		const css = generateCSS();
		await writeFileAsync("assets/css/style.css", css);


}

// prompt the user to continue
async function go() {

	return inquirer.prompt(
		{
			type: "list",
			name: "go",
			message: "Would you like to add employees?",
			choices: ["no", "yes"]
		});
	}

// This allows the user to select yes or no to continue to add employees
async function start() {

	const start = await go();
	if(start.go === 'yes'){
		await init();
	}
	return;

}

// Start the application
start();


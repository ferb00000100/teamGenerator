
//TODO Fix manager.test
const Manager = require("../lib/Manager");

describe("Manager class", () => {
	describe("getRoll method", () => {
		it("return role", () => {
			let jason = new Manager(14, 'Jason', 'Martin', 'Engineer', 'test@test.com', '555-555-5555');
			expect(jason.getRoll()).toBe('Manager');
		});
	});
});

describe("Manager class", () => {
	describe("getTeam method", () => {
		it("return team", () => {
			const testTeam = "Interns";
			let jason = new Manager(14, 'Jason', 'Martin', 'Engineer', 'test@test.com', '555-555-5555',testTeam);
			expect(jason.getTeam()).toBe(testTeam);
		});
	});
});


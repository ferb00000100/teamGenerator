const Intern = require("../lib/Intern");

describe("Intern class", () => {
		it("return role", () => {
			let jason = new Intern(14, 'Jason', 'Martin', 'Engineer', 'test@test.com', '555-555-5555');
			expect(jason.getRoll()).toBe('Intern');
		});
});

describe("Intern class", () => {
	it("return school", () => {
		const testSchool = "DU"
		let jason = new Intern(14, 'Jason', 'Martin', 'Engineer', 'test@test.com', '555-555-5555', testSchool);
		expect(jason.getSchool()).toBe(testSchool);
	});
});
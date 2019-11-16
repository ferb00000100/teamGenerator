const Employee = require("../lib/Employee");

describe("Employee class", () => {
	describe("getId method", () => {
		it("return employeeId", () => {
			let jason = new Employee(14, 'Jason', 'Martin', 'Engineer','test@test.com','555-555-5555');
			expect(jason.getId()).toBe(14);
		});

		it("return title", () => {
			let jason = new Employee(14, 'Jason', 'Martin', 'Engineer','test@test.com', '555-555-5555');
			expect(jason.getTitle()).toBe('Engineer');
		});

		it("return office number", () => {
			let jason = new Employee(14, 'Jason', 'Martin', 'Engineer', 'test@test.com','555-555-5555');
			expect(jason.getOfficeNumber()).toBe('555-555-5555');
		});

		it("return email", () => {
			let jason = new Employee(14, 'Jason', 'Martin', 'Engineer', 'test@test.com','555-555-5555');
			expect(jason.getEmail()).toBe('test@test.com');
		});

	});
});

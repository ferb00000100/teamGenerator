const Engineer = require("../lib/Engineer");

describe("test getGitHub()", () => {
	it("return github username", () => {
 	const testUser = "gitUser";
	const jason = new Engineer(14, 'Jason', 'Martin', 'Engineer', 'test@test.com', '555-555-5555', testUser);
	expect(jason.getGitHub()).toBe(testUser);
	});
});


describe("test getRoll()", () => {
	it("return title", () => {
	const testTitle = "Engineer";
	const jason = new Engineer(14, 'Jason', 'Martin', 'Engineer', 'test@test.com', '555-555-5555');
	expect(jason.getRoll()).toBe(testTitle);
	});
});


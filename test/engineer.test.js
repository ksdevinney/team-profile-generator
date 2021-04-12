const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");

// I don't think engineer needs this
// test("Can set office number via constructor argument", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.officeNumber).toBe(testValue);
// });

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGitHub()", () => {
  const testValue = hondaCivic;
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
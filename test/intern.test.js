const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

// don't think I need this one
// test("Can set office number via constructor argument", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.officeNumber).toBe(testValue);
// });

// test for getrole
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

// test for getschool
test("Can get school via getSchool()", () => {
  const testValue = "SMU";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
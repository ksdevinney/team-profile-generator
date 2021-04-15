const Intern = require("../lib/intern");

// set school
test("Can set school via constructor argument", () => {
  const testValue = "SMU";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

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
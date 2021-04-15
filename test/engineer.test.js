const Engineer = require("../lib/engineer");

// set GitHub username
test("Can set GitHub via constructor argument", () => {
  const testValue = "hondaCivic";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.gitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "hondaCivic");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGitHub()", () => {
  const testValue = "hondaCivic";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});
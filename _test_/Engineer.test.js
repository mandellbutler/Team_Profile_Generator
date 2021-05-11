const Engineer = require("../lib/Engineer");



it("gets username from getGithub()", () => {
    const test_value = "GithubName";
    const eng = new Engineer("Hero", 99, "sampleMail", test_value);
    expect(eng.getGithub()).toBe(test_value);
});

it("sets github username from constructor", () => {
    const test_value = "GithubName";
    const eng = new Engineer("Hero", 99, "sampleMail", test_value);
    expect(eng.github).toBe(test_value);
});

 //validates username input
 it("name is of type string", () => {
    const test_value = "GithubName"
    const eng = new Engineer("Hero", 99, "sampleMail", test_value);
    expect(typeof eng.name).toBe("string")
});

it("gets Engineer title from getRole()", () => {
    const test_value = "Engineer";
    const eng = new Engineer("Hero", 99, "sampleMail", "gitName");
    expect(eng.getRole()).toBe(test_value);
})

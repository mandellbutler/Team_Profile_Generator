const Engineer = require("../lib/Engineer");



it("gets username from github input", () => {
    const test_value = "GithubName";
    const eng = new Engineer("Hero", 99, "sampleMail", test_value);
    expect(eng.getGithub()).toBe(test_value);
});

it("sets github username from constructor", () => {
    const test_value = "GithubName";
    const eng = new Engineer("Hero", 99, "sampleMail", test_value);
    expect(eng.github).toBe(test_value);
});

it("recieves Engineer title from role input", () => {
    const test_value = "Engineer";
    const eng = new Engineer("Hero", 99, "sampleMail", "gitName");
    expect(eng.getRole()).toBe(test_value);
})
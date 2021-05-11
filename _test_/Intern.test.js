const Intern = require("../lib/Intern");



it("gets school from getSchool()", () => {
    const test_value = "PVAMU";
    const int = new Intern("Student", 99, "sampleMail", test_value);
    expect(int.getSchool()).toBe(test_value);
});

it("sets github school from constructor", () => {
    const test_value = "PVAMU";
    const int = new Intern("Student", 99, "sampleMail", test_value);
    expect(int.school).toBe(test_value);
});

 //validates school input
 it("name is of type string", () => {
    const test_value = "PVAMU"
    const int = new Intern("Student", 99, "sampleMail", test_value);
    expect(typeof int.school).toBe("string")
});

it("gets Intern title from getRole()", () => {
    const test_value = "Intern";
    const int = new Intern("Student", 99, "sampleMail", "school");
    expect(int.getRole()).toBe(test_value);
})

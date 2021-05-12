const Manager = require("../lib/Manager");



it("gets office number from getOffice()", () => {
    const test_value = 923;
    const manager = new Manager("Manager", 99, "sampleMail", test_value);
    expect(manager.getOffice()).toBe(test_value);
});

it("sets office number from constructor", () => {
    const test_value = 923;
    const manager = new Manager("Manager", 99, "sampleMail", test_value);
    expect(manager.office).toBe(test_value);
});

 //validates office input as number
 it("office is of type number", () => {
    const test_value = 923
    const manager = new Manager("Manager", 99, "sampleMail", test_value);
    expect(typeof manager.office).toBe("number")
});

//validates office input as string when given a string
it("office number is of type number", () => {
    const test_value = "923"
    const manager = new Manager("Manager", 99, "sampleMail", test_value);
    expect(typeof manager.office).toBe("string")
});

//throw error msg when given a string
it("setOffice fails if not given a number", () => {
    const test_value = "923";
    try {
        expect(new Manager("Manager", 99, "sampleMail", test_value)).toThrowError(Error)
    } catch (error) {
        console.log(error.message)
    }
}); 

it("gets Manager title from getRole()", () => {
    const test_value = "Manager";
    const manager = new Manager("Manager", 99, "sampleMail", "office");
    expect(manager.getRole()).toBe(test_value);
    
})

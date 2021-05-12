const Employee = require("../lib/Employee");

/*
Employee
----------
name:string
id:number
email:string
---------
getName():string
getId():number
getEmail():string
--------
setName(name:any):void
setId(id:any):void
setEmail(email:any):void
*/

describe("Employee", () => {
    //creates employees cards
    it("creates employees cards", () => {
        const newEmployee = new Employee("a", 1);
        expect(typeof newEmployee).toBe("object")
    });

    it("sets name from constructor", () => {
        const test_value = "Ben"
        const newEmployee = new Employee(test_value, 1);
        expect(newEmployee.name).toEqual(test_value)
    });

    it("sets name from constructor", () => {
        const test_value = "Ben"
        const newEmployee = new Employee(test_value, 1);
        expect(newEmployee.getName()).toEqual(test_value)
    });
    //validates name input
    it("name is of type string", () => {
        const test_value = "Ben"
        const newEmployee = new Employee(test_value, 1);
        expect(typeof newEmployee.name).toBe("string")
    });

    it("sets id from constructor", () => {
        const test_value = 1
        const newEmployee = new Employee(null, test_value);
        expect(newEmployee.id).toEqual(test_value)
    });

    it("getId returns id", () => {
        const test_value = 1
        const newEmployee = new Employee(null, test_value);
        expect(newEmployee.getId()).toEqual(newEmployee.id)
    });

    it("id is of type number", () => {
        const test_value = 1
        const newEmployee = new Employee(null, test_value);
        expect(typeof newEmployee.id).toBe("number")
    });

    it("id is of type number", () => {
        const test_value = "1"
        const newEmployee = new Employee(null, test_value);
        expect(typeof newEmployee.id).toBe("number")
    });

    it("setId fails if not given a number", () => {
        const test_value = "g";
        try {
            expect(new Employee(null, test_value)).toThrowError(Error)
        } catch (error) {
            console.log(error.message)
        }
    });

    it("sets email from constructor", () => {
        const test_value = "b@b"
        const newEmployee = new Employee(null, 1, test_value);
        expect(newEmployee.email).toEqual(test_value)
    });

    it("getEmail returns email", () => {
        const test_value = "b@b"
        const newEmployee = new Employee(null, 1, test_value);
        expect(newEmployee.getEmail()).toEqual(newEmployee.email)
    });

    it("email is of type string", () => {
        const test_value = "b@b"
        const newEmployee = new Employee(null, 1, test_value);
        expect(typeof newEmployee.email).toBe("string")
    });



})
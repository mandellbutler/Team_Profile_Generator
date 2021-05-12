class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.setId(id);
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

    setId(id) {
        if (isNaN(id)) throw new Error('Please enter a valid office number.');

        this.id = (typeof id !== "number") ? parseInt(id) : id;
    }
}

module.exports = Employee;

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
        return this.constructor.name;
    }

    setId(id) {
        if (isNaN(id)) throw new Error('Id must be a number');

        this.id = (typeof id !== "number") ? parseInt(id) : id;
    }
}

module.exports = Employee;

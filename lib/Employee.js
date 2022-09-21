class Employee {
    constructor(name, email, id, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
       }
    
    getEmail() {
        return this.email;
    }

    getID() {
        return this.id;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;

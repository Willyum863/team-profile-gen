class Employee {
    constructor(name, email, id,) {
        this.name = name;
        this.id = id;
        this.email = email;
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
        return 'Employee';
    }
};

module.exports = Employee;

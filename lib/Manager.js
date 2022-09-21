//In addition to Employee's properties and methods, Manager will also have:
//officeNumber
//getRole() // Overridden to return 'Manager'

const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, role, officeNumber) {
        super(name, id, email, role)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
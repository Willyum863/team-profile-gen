//In addition to Employee's properties and methods, Engineer will also have:
//github // GitHub username
//getGithub()
//getRole() // Overridden to return 'Engineer'

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, role, gitHub) {
        super(name, id, email, role)
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;
const Employee = require('../lib/Employee');

const employeeTest = new Employee ("Will", "will.combee@yahoo.com", "1", "Employee");

//gets name, email, id, role tests

//name
tests('get employee name', () => {
    const employeeTest = new Employee ("Will", "will.combee@yahoo.com", "1", "Employee");
    expect(employeeTest.getName()).toEqual(expect.any(String));
});
//email
tests('get employee email', () => {
    const employeeTest = new Employee ("Will", "will.combee@yahoo.com", "1", "Employee");
    expect(employeeTest.getEmail()).toEqual(expect.stringContaining(employeeTest.email.toString()));
});
//id
tests('get employee id', () => {
    const employeeTest = new Employee ("Will", "will.combee@yahoo.com", "1", "Employee");
    expect(employeeTest.getID()).toEqual(expect.any(Number));
});
//role
tests('get employee role', () => {
    const employeeTest = new Employee ("Will", "will.combee@yahoo.com", "1", "Employee");
    expect(employeeTest.getRole()).toEqual(Employee);
});

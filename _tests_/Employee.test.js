const Employee = require('../lib/Employee');


const employeeTest = new Employee ("Will", "will.combee@yahoo.com", "1", "Employee");

//gets name, email, id, role tests

//name
test('get employee name', () => {
    const employeeTest = new Employee ("Will", "will.combee@yahoo.com", "1", "Employee");
    expect(employeeTest.getName()).toEqual(expect.any(String));
});
//email
test('get employee email', () => {
    const employeeTest = new Employee ("Will", "will.combee@yahoo.com", "1", "Employee");
    expect(employeeTest.getEmail()).toEqual(expect.stringContaining(employeeTest.email.toString()));
});
//id
test('get employee id', () => {
    const employeeTest = new Employee ("Will", "will.combee@yahoo.com", "1", "Employee");
    expect(employeeTest.getID()).toEqual(expect.any(Number));
});
//role
test('get employee role', () => {
    const employeeTest = new Employee ("Will", "will.combee@yahoo.com", "1", "Employee");
    expect(employeeTest.getRole()).toEqual(Employee);
});

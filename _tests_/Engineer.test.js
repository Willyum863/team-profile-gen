const Engineer = require('../lib/Engineer');
 
test('creates an Engineer object', () => {
    const engineerTest = new Engineer("Will", "will.combee@yahoo.com", "2", "Willyum863");
    
    expect(engineerTest.github).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer("Will", "will.combee@yahoo.com", "2", "Willyum863");

    expect(engineerTest.getGithub()).toEqual(expect.stringContaining(engineerTest.github.toString()));
});

test('gets role of employee', () => {
    const engineerTest = new Engineer("Will", "will.combee@yahoo.com", "2", "Willyum863");

    expect(engineerTest.getRole()).toEqual("Engineer");
});
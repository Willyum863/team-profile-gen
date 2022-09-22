// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// profiles
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// create page
const generateHTML = require('./src/page-template')

//team member input 
const teamMembers = [];

function runApp() {

    //team member user input
    function mainPrompt() {
        inquirer.prompt([{
          type: "list",
          message: "What type of employee do you want to add?",
          name: "addEmployeePrompt",
          options: ["Manager", "Engineer", "Intern", "None"]  
        }]).
        then(function (userInput) {
            switch(userInput.addEmplyeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    htmlBuilder();    
            }
        })

    }

// Manager
function addManager() {
    inquirer.prompt ([

        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
          },
      
          {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID?"
          },
      
          {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
          },
      
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
          }
    ]).
    then(answers => {
        const manager = new Manager( answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        mainPrompt();
    });

}

// Engineer
function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).
    then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      mainPrompt();
    });

}

  //Intern
  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern go to?"
      }

    ]).
    then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      mainPrompt();
    });

  }

  function htmlBuilder () {
    console.log("Team Profile Generated")

    fs.writeFileSync(generateHTML(teamMembers), "UTF-8")

}

mainPrompt();

}

runApp();

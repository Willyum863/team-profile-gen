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

}

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
            message: "What is the manager's employee ID number?"
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


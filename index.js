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
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'project',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm i',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
        default: 'npm test',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    })
}

// Function call to initialize app
init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    })
};
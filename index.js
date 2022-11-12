//Global requires
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//User input array
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a description of the project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for the project.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide usage instructions for the project.',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please select a license for the project.',
        name: 'license',
        choices: ['MIT', 'ISC', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines for the project.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to test the project.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email'
    },
];

//Write README function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Information successfully transferred to the README!');
    });
};
    
// //Initialize app function
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile(`${response.title}.md`, response);
    });
};

//Function call to initialize app
init();

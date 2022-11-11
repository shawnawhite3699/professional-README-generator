const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

inquirer
    .prompt([
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
            Choices: ["MIT", "ISC", "Apache", "GPL", "BSD", "GNU", "Mozilla-Public", "None"]
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines for the project.',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Please provide instructions for how to test the project.',
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
    ]);
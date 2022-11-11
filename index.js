const inquirer = require('inquirer');
const fs = require('fs');

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
    ]);
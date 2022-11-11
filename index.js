const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of this project?',
            name: 'title',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please provide a description of the project.',
            name: 'description',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please provide installation instructions for the project.',
            name: 'installation',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter project installation instructions (or N/A) to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please provide usage instructions for the project.',
            name: 'usage',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please describe how to use the project to continue.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Please select a license for the project.',
            name: 'license',
            Choices: ["MIT", "ISC", "Apache", "GPL", "BSD", "GNU", "Mozilla-Public", "None"],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select a license from the list to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines for the project.',
            name: 'contributing',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please describe how others can contribute to the project to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please provide instructions on how to test the project.',
            name: 'tests',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please explain how to test the project to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'github',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please enter your email address.',
            name: 'email'
        },
    ]);
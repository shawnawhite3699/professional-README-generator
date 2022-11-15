//Function to return a license badge based on selected license
function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
    }
    return ``;
}
  
//Function to return a license link based on selected license
function renderLicenseLink(license) {
    if (license !== "None") {
      return `- [License](#license)`
    }
    return ``;
}
  
//Function to return the license section of README
function renderLicenseSection(license) {
    if (license !== "None") {
      return `
## License
    
This application is covered under the ${license} license.`
    }
    return ``;
}
  
//Generate markdown for README function
function generateMarkdown(data) {
    return `
# ${data.title}
    
${renderLicenseBadge(data.license)}
    
## Description
    
${data.description}

---

## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

---

## Installation
    
${data.installation}

---

## Usage
    
${data.usage}

---

${renderLicenseSection(data.license)}

---

## Contributing
    
${data.contributing}

---

## Tests
    
${data.tests}

---

## Questions
    
Check out my other projects on GitHub: ${data.github}   
Feel free to contact with me with questions at: ${data.email}   
  `;
}  

module.exports = generateMarkdown;
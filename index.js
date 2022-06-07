// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown.js');
const renderLicenseBadge = require('./utils/generateMarkdown.js');


//Prompt function with questions
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Type the project title: ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Type a description: ',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Type installation instructions: ',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Type how to use this: ',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Type instructions for how to contribue to this project: ',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Type instructions for how to test this project: ',
      },
      {
        type: 'input',
        name: 'questionsEmail',
        message: 'Type your contact email for the Questions section: ',
      },
      {
        type: 'input',
        name: 'questionsGithub',
        message: 'Type your Github username for the Questions section: ',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Type the name you want on your copyright: ',
      },
      {
        type: "list",
        name: "license",
        message: "Which license would you like?",
        choices: [
            "MIT",
            "Apache V.2",
            "3-Clause BSD",
            "2-Clause BSD",
            "GNU General Public License version 3",
            "No license"
        ]
      },
    ]);
  };

// This writes the readme file to disk
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Sucessfully wrote file') 
    );
}

// The initialization function utilizes promises so that the app waits until all responses are recorded before writing to file
function init() {
  promptUser()
  .then((answers) => writeToFile('generatedREADME.md', generateMarkDown(answers)))
  .catch((err) => console.error(err));
}

// Function call to initialize app
init();


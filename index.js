// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// Why an array and not a prompt object?
const questions = ["What is the title of the project?", "What is the description?", "How do you install this?", "How do you use this?", "What are the contribution guidelines?", "What are the test instructions?"];

//Prompt function with questions
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Type the project title',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Type a description',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Type installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Type how to use this',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Type all who contributed for the Credits section',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Type instructions for how to contribute',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Type instructions for how to test',
      },
    ]);
  };

// TODO: Write function for license list?

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Sucessfully wrote file') 
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// promptUser();
writeToFile(generateMarkDown('testREADME.ms', promptUser()));
// generateMarkDown(promptUser);


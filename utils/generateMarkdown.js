// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ${data.badges}

  ## Table of Contents
  1. [Description](#Description)
  2. [Insatllation](#Installation)
  3. [Usage](#Usage)
  4. [How to Contribute](#contribute)
  5. [Tests](#Tests)
  6. [Credits](#Credits)
  7. [License](#License)

  * * * * * *

  <a name="Installation"></a>
  ## Installation
  ${data.installation}

  <a name="Usage"></a>
  ## Usage
  ${data.usage}
  
  <a name="Contribute"></a>
  ## How to Contribute
  ${data.contribute}

  <a name="Tests"></a>
  ## Tests
  ${data.tests}

  <a name="Credits"></a>
  ## Credits
  ${data.credits}

  <a name="License"></a>
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;

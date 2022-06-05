//license stuff to use later\
let badge;
let lincenseLink;
var licenseText;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  switch(license) {
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache V.2":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "3-Clause BSD":
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "2-Clause BSD":
      badge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "GNU General Public License version 3":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      badge = "NOT LICENSED";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      lincenseLink = "[License: MIT](https://opensource.org/licenses/MIT)";
      break;
    case "Apache V.2":
      lincenseLink = "[License](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "3-Clause BSD":
      lincenseLink = "[License](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "2-Clause BSD":
      lincenseLink = "[License](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "GNU General Public License version 3":
      lincenseLink = "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      lincenseLink = "NOT LICENSED";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  return `# ${data.title}

   ${badge}

  ## Description
  ${data.description}

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
  ## License Link
  ${lincenseLink}
`;
}

module.exports = generateMarkdown;
// module.exports = renderLicenseBadge;

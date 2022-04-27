// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  [![badge](https://img.shields.io/badge/license-${data.license}-blueviolet)](licenseInput)

  # Description
   ${data.description}

  ## Table of Contents

  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#tests)
  - [Questions](#questions)


  # Username

   ${data.userName}

 
  # Installation

  ${data.install}

  # Usage

  ${data.usage}

  # Contribution 

  ${data.contribution}

  # Tests

  ${data.test}

  # Questions
  Please email me at ${data.email} if you have any questions about this project!
  `;
}

module.exports = generateMarkdown;

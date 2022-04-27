// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
function questions() {
return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the name of your project?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your Project name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'userName',
            message: "What is your Github Username?",
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Please write a description of your project.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }

        },
        {
            type: 'checkbox',
            name: 'license',
            message: "What license should be assigned to the project?",
            choices: ['MIT', 'APACHE', 'BOOST', 'BSD', 'ECLIPSE', 'GNU'],
            default: ['GNU'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'install',
            message: 'What is required to install your project?',
            validate: nodeInstall => {
                if (nodeInstall) {
                    return true;
                } else {
                    console.log('Please enter necessary steps for installation!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do we use this app?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?',
            validate: (contributionInput) => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter guidelines for contribution!')
                    return false;
        
                }
            }
        },
        {
            type: 'checkbox',
            name: 'test',
            message: 'What command should be run to run tests?',
            choices: ['npm test'],
            default: ['npm test'],
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter a test input!');
                    return false;
                }
            }
        },
    ])
};


// TODO: Create a function to write README file
const writeFile = (data) => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("README created!")
        }
    })
};

// TODO: Create a function to initialize app
questions()
  .then(answers => {
      return generateMarkdown(answers);
  })
  .then(data => {
      return writeFile(data);
  })
  .catch(err => {
      console.log(err)
  })

// Function call to initialize app
//init();

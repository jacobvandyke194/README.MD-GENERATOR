const inquirer = require('inquirer');
const fs = require('fs');



inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a brief description of your project:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'How is your project licensed?',
      choices: [
        'None',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense']
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What languages are used within your project?'
    },
    {
      type: 'input',
      name: 'gitUsername',
      message: 'What is your GitHub Username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What kind of tests were ran on this project if any (answer N/A if none)?'
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who contributed to this project?'
    }

  ])
  .then((data) => {
    const makeReadMeFile = readMe(data);
    console.log(data)
    licensePrompt();
    fs.writeFile('generatedReadme.md', makeReadMeFile, (err) => err ? console.log(err)
      : console.log('Creating README.MD file...'));
  });

function licensePrompt(license) {
  if (license === "None") {
    return ``
  }
  if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "BSD 2-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  if (license === "BSD 3-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if (license === "Boost Software") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  if (license === "Creative Commons Zero v1.0") {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  else {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}


function readMe(data, description, title, license, contributors, usage, gitUsername, email) {
  return (
    `# ${data.title}
## Table of Contents
- [Description](#description)
- [License](#license)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions) 
          
## Description
${data.description}

## Installation
          
## Languages
${licensePrompt(data.license)}

${data.usage}

## Contributors
${data.contributors}
  
## Tests
${data.test}

## Questions
If you have any comments, questions, or concerns you can contact me at ${data.email}
`
  )
}
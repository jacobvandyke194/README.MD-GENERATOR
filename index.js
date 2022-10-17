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
            name: 'Description',
            message: 'Give a brief description of your project:'
        },
        {
            type: 'list',
            name: 'installInstructions',
            message: 'How is your project installed/viewed?',
            choices: ['ssh key', 'https', 'git pages']
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the use case of your project?'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to your project?'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to your project?'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to your project?'
        },

    ])
    .then ((data) => {
         const makeReadMeFile = readMe(data);

        fs.writeFile('readme.md', makeReadMeFile, (err) => err ? console.log(err)
        : console.log('Creating README.MD file...'));
    })

    function readMe(data) {
        `Title: ${data.title}`
       console.log( `Hello This is your README File` )
    }
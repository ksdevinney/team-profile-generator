const inquirer = require ('inquirer');
const fs = require('fs');

inquirer
// questions
    .prompt([
        {
            type: 'input',
            message: 'Team name?',
            name: 'team',
        },
        {
            type: 'input',
            message: 'Employee name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'ID number?',
            name: 'id',  
        },
    ])

    .then((response) => {
        const fileName = `${response.team.toLowerCase().split(' ').join('')}.html`;

        const newHtml = `
        ${response.name}
        `;

        fs.writeFile(fileName, newHtml, (err) => 
        err ? console.log(err) : console.log('Success!')
        );
    })


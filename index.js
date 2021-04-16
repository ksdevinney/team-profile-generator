const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
let teamName = ' ';
// empty array for input
let team = [];
let managerList = [];
let engineerList = [];
let internList = [];

inquirer.prompt([
    {
        type: 'input',
        message: 'Team name?',
        name: 'team',
    }])
    .then(response => {
        teamName = response.team;
        startEmployee()
    });

function startEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is the role of this employee?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
        },
    ])

        .then((response) => {
            switch (response.role) {
                case 'Manager':
                    createManager();
                    break;
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    createIntern();
                    break;
                case 'Exit':
                    createHtml();
                    break;
            }
        })

};

function createManager() {
    inquirer.prompt([
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
        {
            type: 'input',
            message: 'Office number?',
            name: 'officeNumber',
        },
        {
            type: 'input',
            message: 'Email?',
            name: 'email',
        }
    ])
        .then(response => {
            const newManager = new Manager(response.name, response.id, response.email, response.officeNumber)
            managerList.push(newManager);
            console.log(managerList);
            startEmployee();
        })
}

function createHtml() {
    const fileName = `${teamName.toLowerCase().split(' ').join('')}.html`;

    let newHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link href="dist/style.css">
    </head>
    <body>
        <header>
            <h1>My Team ${teamName}</h1>
        </header>  
        `;
    let managerHtml = '';
    for (let i = 0; i < managerList.length; i++) {
        managerHtml += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${managerList[i].name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="card-text">${managerList[i].id}</p>
    <p class="card-text">${managerList[i].email}</p>
    <p class="card-text">${managerList[i].officeNumber}</p>
  </div>
</div>
    `
    }
    let closingHtml = `
</body>
</html>
`
    let html = newHtml + managerHtml + closingHtml
    console.log(html);
    fs.writeFile(fileName, html, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}
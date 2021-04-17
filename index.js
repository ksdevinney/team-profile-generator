const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
let teamName = ' ';
const path = require("path")
// empty array for input
// let team = [];
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

// initial choice
function startEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is the role of this employee?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
        },
    ])

        // switch cases for roles
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

// Manager questions
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
            startEmployee();
        })
}

// Engineer questions
function createEngineer() {
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
            message: 'Github account?',
            name: 'gitHub',
        },
        {
            type: 'input',
            message: 'Email?',
            name: 'email',
        }
    ])
        .then(response => {
            const newEngineer = new Engineer(response.name, response.id, response.email, response.gitHub)
            engineerList.push(newEngineer);
            startEmployee();
        })
}
// Intern questions
function createIntern() {
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
            message: 'School?',
            name: 'school',
        },
        {
            type: 'input',
            message: 'Email?',
            name: 'email',
        }
    ])
        .then(response => {
            const newIntern = new Intern(response.name, response.id, response.email, response.school)
            internList.push(newIntern);
            startEmployee();
        })
}

// creates html file after exit
function createHtml() {
    const fileName = path.join(__dirname, `./dist/${teamName.toLowerCase().split(' ').join('')}.html`);

    let newHtml = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/4efd53b931.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
            <nav class="navbar navbar-expand-lg bg-success">
            <div class="container-md">
                <div class="navbar-brand">Team ${teamName}</a>
            </div>
            </nav>
            </header>  
            <div class ="row">
        `;
    let managerHtml = '';
    for (let i = 0; i < managerList.length; i++) {
        managerHtml += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${managerList[i].name}</h5>
                        <h6 class="card-header mb-2" id="manager-name"><i class="far fa-star"></i> Manager</h6>
                        <p class="card-text">Id: ${managerList[i].id}</p>
                        <p class="card-text">Email: <a href="mailto:${managerList[i].email}"> ${managerList[i].email}</a></p>
                        <p class="card-text">Office Number: ${managerList[i].officeNumber}</p>
                    </div>
                </div>
    `
    }
    let engineerHtml = '';
    for (let i = 0; i < engineerList.length; i++) {
        engineerHtml += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${engineerList[i].name}</h5>
                        <h6 class="card-header mb-2" id="engineer-name"><i class="far fa-folder"></i> Engineer</h6>
                        <p class="card-text">Id: ${engineerList[i].id}</p>
                        <p class="card-text">Email: <a href="mailto:${engineerList[i].email}">${engineerList[i].email}</a></p>
                        <p class="card-text">GitHub: <a href="https://github.com/${engineerList[i].gitHub}" target="_blank">${engineerList[i].gitHub}</a></p>
                    </div>
                </div>
    `
    }
    let internHtml = '';
    for (let i = 0; i < internList.length; i++) {
        internHtml += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${internList[i].name}</h5>
                        <h6 class="card-header mb-2"  id="intern-name"><i class="far fa-bookmark"></i> Intern</h6>
                        <p class="card-text">Id: ${internList[i].id}</p>
                        <p class="card-text">Email: <a href="mailto:${internList[i].email}">${internList[i].email}</a></p>
                        <p class="card-text">School: ${internList[i].school}</p>
                    </div>
                </div>
    `
    }
    let closingHtml = `
            </div>
        </body>
    </html>
`
    // concatenate html elements
    let html = newHtml + managerHtml + engineerHtml + internHtml + closingHtml
    fs.writeFile(fileName, html, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}
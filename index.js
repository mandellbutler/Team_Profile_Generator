//=====================================DEPENDENCIES
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//====================================FUNCTIONS
const employees = [];

function initApp() {
    startHtml();
    addEmployee();
}

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "Please enter employee name:",
        name: "name"
    },
    {
        type: "list",
        message: "Please select job title",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        type: "input",
        message: "Please enter employee's id:",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter employee's email address:",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office number";
        }
        inquirer.prompt([{
            message: `Enter employee's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: [
                "yes",
                "no"
            ],
            name: "addEmployees"
        }])
        .then(function({roleInfo, addEmployees}) {
            let newEmployee;
            if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newEmployee = new Intern(name, id, email, roleInfo);
            } else {
                newEmployee = new Manager(name, id, email, roleInfo);
            }
            employees.push(newEmployee);
            addHtml(newEmployee)
            .then(function() {
                if (addEmployees === "yes") {
                    addEmployee();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}


//========RENDER HTML WITH USER INPUT VIA HTML TEMPLATE
function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <link rel="stylesheet" href="./style.css"/>
        <title>Profile Generator</title>
    </head>
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid p-3 mb-2 bg-danger text-white">
                <div class="container d-flex p-2 bd-highlight justify-content-center">
                  <h1 class="display-4">My Team</h1>
                </div>
            </div>
        </header>
        <main class="d-flex flex-column p-2 bd-highlight">
            <div class="container d-flex justify-content-center p-2 flex-row col-sm-6 col-md-4">`;
    fs.writeFile("./dist/results.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="container d-flex p-2 flex-column">
            <div class="card shadow-lg d-flex flex-column text-white p-0 my-1">
                <div class="card-header d-flex flex-column bg-primary pb-0 px-3">
                    <p>${name}</p>
                    <p><span class="fas fa-glasses"></span> Engineer</p>
                </div>
                <div class="container d-flex align-items-center bg-light">
                    <ul class="list-group p-1 text-dark col 10">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">Github: ${gitHub}</li>
                    </ul>
                </div>
            </div>
        </div>`; 
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="container d-flex p-2 flex-column">
                        <div class="card shadow-lg d-flex flex-column text-white p-0 my-1">
                            <div class="card-header d-flex flex-column bg-primary pb-0 px-3">
                                <p>${name}</p>
                                <p><span class="fas fa-user-graduate"></span> Intern</p>
                            </div>
                            <div class="container d-flex align-items-center bg-light">
                                <ul class="list-group p-1 text-dark col 10">
                                    <li class="list-group-item">ID: ${id}</li>
                                    <li class="list-group-item">Email: ${email}</li>
                                    <li class="list-group-item">School: ${school}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
        } else {
            const office = member.getOffice();
            data = `<div class="container d-flex p-2 flex-column">
                        <div class="card shadow-lg d-flex flex-column text-white p-0 my-1">
                            <div class="card-header d-flex flex-column bg-primary pb-0 px-3">
                                <p>${name}</p>
                                <p><span class="fas fa-mug-hot"></span> Manager</p>
                            </div>
                            <div class="container d-flex align-items-center bg-light">
                                <ul class="list-group p-1 text-dark col 10">
                                    <li class="list-group-item">ID: ${id}</li>
                                    <li class="list-group-item">Email: ${email}</li>
                                    <li class="list-group-item">Office: ${office}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
        }
        console.log("adding team member");
        fs.appendFile("./dist/results.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
}

function finishHtml() {
    const html = ` </div>
        </div>
    
    </body>
    </html>`;

    fs.appendFile("./dist/results.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}
//===========================================INITIALIZATION
initApp();
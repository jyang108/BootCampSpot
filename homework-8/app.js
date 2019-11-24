const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

const employees = [];

async function employeeSelection() {

    const {position} = await inquirer.prompt([
        {
            type: "list",
            message: "Choose a position to fill",
            name: "position",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Done"
            ]
        }

    ]);

    async function managerForm() {
        
        const {name, id, email, officeNumber} = await inquirer.prompt([
            {
                message: "What is their name?",
                name: "name"
            },
            {
                message: "what is their id?",
                name: "id"
            },
            {
                message: "What is their email?",
                name: "email"
            },
            {
                message: "What is their office number?",
                name: "officeNumber"
            }
        ]);

        let Manager = new manager(name, id, email, officeNumber);
        employees.push(Manager);
        console.log("added manager");
        console.log(employees);
        employeeSelection();
    };

    async function engineerForm() {
        
        const {name, id, email, github} = await inquirer.prompt([
            {
                message: "What is their name?",
                name: "name"
            },
            {
                message: "what is their id?",
                name: "id"
            },
            {
                message: "What is their email?",
                name: "email"
            },
            {
                message: "What is their GitHub username?",
                name: "github"
            }
        ]);

        let Engineer = new engineer(name, id, email, github);
        employees.push(Engineer);
        console.log("added engineer");
        console.log(employees);
        employeeSelection();
    };

    async function internForm() {
        
        const {name, id, email, school} = await inquirer.prompt([
            {
                message: "What is their name?",
                name: "name"
            },
            {
                message: "what is their id?",
                name: "id"
            },
            {
                message: "What is their email?",
                name: "email"
            },
            {
                message: "Which school do they attend?",
                name: "school"
            }
        ])

        let Intern = new intern(name, id, email, school);
        employees.push(Intern);
        console.log("added intern");
        console.log(employees);
        employeeSelection();
    }

    switch(position) {
        case "Manager":
            return managerForm();
            break;
        case "Engineer":
            return engineerForm();
            break;
        case "Intern":
            return internForm();
            break;
        case "Done":
            return 
            break;
    }


};



employeeSelection();
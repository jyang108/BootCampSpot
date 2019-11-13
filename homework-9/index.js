const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "favoriteColor",
        message: "What is your favorite color?"
      },
      {
        type: "input",
        name: "location",
        message: "Where are you located?"
      },
      {
        type: "input",
        name: ""
      },
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      },
    ]);
  }
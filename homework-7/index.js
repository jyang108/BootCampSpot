const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your full name"
    },
    {
      type: "input",
      name: "favoriteColor",
      message: "What is your favorite color?"
    },
    {
      type: "input",
      name: "location",
      message: "Enter your location as City, State"
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL"
    },
  ]);
}


function generateHTML(answers, res) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Developer Profile</title>
      <style>
          #wrapper {
              margin-top: 100px;
              text-align: center;
          }
          .jumbotron {
              margin: auto;
          }
          .jumbotron,
          .info {
              background-color: #f17362;
          }
          body,
          a {
              color: #fff6e8;
          }    
          a:hover{
              text-decoration: none;
              color:#fff6e8;
          } 
          nav {
              display: table;
              margin: 0 auto;
          }
          ul {
              list-style: none;
          }
          li {
              display: inline;
              margin: 10px;
          }
          .info {
              width: 350px;
              height: 100px;
              margin: 10px 40px;
              border-radius: 5px;
          }
          #firstRow,
          #secondRow {
              display: flex;
          }
          img {
              border-radius: 50%;
              border: #b8b8b8 10px;
          }
      </style>
  </head>
  <body style="width: 794px; height: auto; margin:auto;">
      <div id="wrapper">
          <div class="jumbotron">
              <img src="">
              <h1 class="">Hi!</h1>
              <h2>My name is ${answers.name}</h2>
              <p></p>
              <div id="nav">
                  <div class="table">
                      <ul id="horizontal-list">
                          <li><a href="">${answers.location}</a></li>
                          <li><a href="${res.data.url}">GitHub</a></li>
                          <li><a href="${answers.linkedin}">LinkedIn</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <br>
          <div>
              <div>
                  <h3 style="color: black;">${res.data.bio}</h3>
              </div>
              <br>
              <div id="firstRow">
                  <div class="info">
                      <h3>Public Repositories</h3>
                      <h5></h5>
                  </div>
                  <div class="info">
                      <h3>Followers</h3>
                      <h5></h5>
                  </div>
              </div>
              <br>
              <div id="secondRow">
                  <div class="info">
                      <h3>GitHub Stars</h3>
                      <h5></h5>
                  </div>
                  <div class="info">
                      <h3>Following</h3>
                      <h5></h5>
                  </div>
              </div>
          </div>
      </div>
  </body>
  
  </html>`
}


async function init() {
  console.log("hi");
  try {
    const answers = await promptUser();

    const res = github(answers);

    const html = generateHTML(answers, res);

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

function github(answers) {
  const queryUrl = `https://api.github.com/users/${answers.username}`

  return axios.get(queryUrl)
    .then(function (res) {
      console.log(res.data.url);
      console.log(res.data.bio);
      console.log(res.data.avatar_url);


    });
};

init();
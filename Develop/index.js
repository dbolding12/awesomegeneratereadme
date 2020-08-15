const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js")
//const queryUrl = `https://api.github.com/users/${data.username}`;


const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser()
{
    return inquirer.prompt([                                                                     
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "Impetus"
      },
      {
        type: "input",
        name: "description",
        message: "Where is your project description?",
        default: "In this project we had to collaborate to create project that meets requirements but displays the teams creativity."
      },
      {
        type: "input",
        name: "repo",
        message: "Where is your project repo?",
        default: "TJFitz/Impetus"
      },
      {
        type: "input",
        name: "username",
        message: "What is your github username?",
        default: "dbolding12"
      },
      {
        type: "input",
        name: "usage",
        message: "What is the projects usage",
        default:"nmp run usage"
      },
      {
        type: "input",
        name: "test",
        message: "What is your project test scripts?" ,
        default: "npm run test"
      },
      {
        type: "input",
        name: "contribution",
        message: "Who were the contributors on the project?",
        default: "Ashley Bolding, Zoe Bolding, Trey Bolding, Javier McCier"
      },
      {
        type: "input",
        name: "license",
        message: "Enter your license",
        default: "MIT"
      },
      {
        type: "input",
        name: "installation",
        message: "what is the installation method?",
        default: "npm init"
      },
    ]);
  }



// function to write README file
//function writeToFile("README.md", data) {}

// function to initialize program
async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync("README.md", readMe);
            console.log("Success!");
    } catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();

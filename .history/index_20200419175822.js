import fs from "fs";
let inquirer = require("inquirer");


// taking user input
inquirer.prompt([
    {
    type: "Name",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "Repo",
    message: "What is your GitHub Repo?",
    name: "Repo"
  },
  {
    type: "checkbox",
    message: "What coding languages do you know?",
    name: "stack",
    choices: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "MySQL",
      "Python",
      "Java",
    ]

  }
])
    .then(function(response) {

        if (response.confirm === response.password) {
          console.log("Success!");
        }
        else {
          console.log("You forgot your password already?!");
        }
      });
])
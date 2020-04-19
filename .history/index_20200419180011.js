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
.then(function(data) {

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
        }
      });

import fs from "fs";
let inquirer = require("inquirer");


// taking user input
inquirer.prompt([
    type: "input",
    message: "What is your user name?",
    name: "username"
  },
  {
    type: "password",
    message: "What is your password?",
    name: "password"
  },
  {
    type: "password",
    message: "Re-enter password to confirm:",
    name: "confirm"
  }
])

])
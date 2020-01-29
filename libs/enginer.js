
const inquirer = require('inquirer')

inquirer
  .prompt([
    {message: "Enter Your Name",
    name: "name",
  type: "input"},
   {message: "Enter Your ID Number",
    name: 'id',
  type: "input"},
    {message: "What is your title?",
    name: 'title',
    type: "input"
    }
  ])
  .then(function (responce) {
    console.log(responce)
  })

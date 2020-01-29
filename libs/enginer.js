
const inquirer = require('inquirer')

inquirer
  .prompt([
    {message: "Enter Your Name",
    name: "name"},
   {message: "Enter Your ID Number",
    name: 'id'},
    {message: "What is your title?",
    name: 'title'
    }
  ])
  .then(function () {
    console.log()
  })

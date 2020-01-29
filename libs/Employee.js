/* The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * title
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee' */


//for inquirer UA Coding Bootcamp 01.23.20 9.3 time stamp 2:04:50



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


const newEmp = {
  name: "",
  id: "",
  title: "",
}


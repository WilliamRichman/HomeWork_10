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
  .prompt({
    message: "Enter Your Name",
    name: "name"
  })
  .then(function (name) {
    console.log(name)
  })

inquirer
  .prompt({
    message: "Enter Your ID Number",
    id: "id"
  })
  .then(function (id) {
    console.log(id)
  })

inquirer
  .prompt({
    message: "Enter Your Title",
    title: "title"
  })
  .then(function (Title) {
    console.log(title)
  })

const newEmp = {
  name: "",
  id: "",
  title: "",
}


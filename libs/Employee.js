/* The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * title
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee' */


const inquirer = require('inquirer')

inquirer
  .prompt({
    message: "Enter Your Name Please ",
    name: "name"
  })
  .then(function (name) {
    console.log(name)
    console.log(id)
  })

inquirer
  .prompt({
    message: "Enter Your ID Number ",
    id: "id"
  })
  .then(function (id) {
    console.log(id)
  })


const newEmp = {
  name: "",
  id: "",
  title: "",

}


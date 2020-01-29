function NewCharacter() {
    const inquirer = require(‘inquirer’)
    inquirer
     .prompt([
         {message: “What’s your character’s name?“,
        name: “name”,
        type: “input”,
        },
        {
        message: “What’s your character’s profession?“,
        name: “profession”,
        type: “input”,
        },
        { message: “How old is your character?“,
        name: “age”,
        type: “input”,
        }
     ])
     .then(function (response){
        console.log(response);
     })
     this.strength = 10;
     this.hitpoints = 100;
     this.printAges = function() {
         const Ages = this.Ages();
         for (let i = 0; i < Ages.length; index++) {
             console.log(‘${i + 1}, ${Ages[i]}’)
         }
        }
}
NewCharacter ();
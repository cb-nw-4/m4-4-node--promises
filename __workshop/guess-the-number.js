var inquirer = require('inquirer');

const hiddenNumber =Math.floor(Math.random()* 100);
console.log(hiddenNumber)
let numberOfGuess = 5;
var output = [];

var questions = [{
    type:'input',
    name:'number',
    message:'Think of a number between 1 and 100:'
  }]


function guessNumber() {
    inquirer.prompt(questions, function(answers) {
        var number = Number.parseInt(answers.number)     
    }).then(answer=> {
        if(answer === hiddenNumber){
            console.log('Good Job');
        }
        else if (answer !== hiddenNumber && numberOfGuess > 0) {
            guessNumber();
            numberOfGuess --;
            console.log('numberOfGuess', numberOfGuess)
            console.log('Try again');
        } else {
            console.log(`You will have it next time, the hidden number was ${hiddenNumber}`)
        }
    })
        .catch(error => console.log('error', error))
    }
        
guessNumber()
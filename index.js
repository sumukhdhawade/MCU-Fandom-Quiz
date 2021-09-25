const chalk = require('chalk');

var readlineSync = require("readline-sync");

score=0;

var userName = readlineSync.question(chalk.blue("What's your name? "));

console.log(chalk.blue("Welcome ")+userName +chalk.redBright("! Lets see how well you know the MCU"));

console.log("-------------------------");

console.log(chalk.redBright("LEVEL 1 : "));

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.bold.green("right!"));
    score++;
  } else{
    console.log(chalk.bold.red("wrong!"));
    score--;
  }
  console.log(chalk.bold.yellowBright("current score: ",score));
  console.log("-------------------------");
}

var highScores = {
  name1: "Sumukh",
  score1: "10",
}


var questions1 = [{question1:chalk.bold.cyan("who was the first Avenger? "),answer1:"Captain America"},{question1:chalk.bold.cyan("who is the most powerful Avenger? "),answer1:"Scarlet Witch"},{question1:chalk.bold.cyan("who is the strongest Avenger? "),answer1:"HULK"}];

for(var i=0;i<questions1.length;i++){
  var currentQuestion1 = questions1[i];
  play(currentQuestion1.question1, currentQuestion1.answer1);
}

if(score===3){
  console.log(chalk.redBright("LEVEL 2 : "));

  var questions2 = [{question2:chalk.bold.cyan("which year did the MCU begin?"),answer2:"2008"},{question2:chalk.bold.cyan("how many cameos does Stan Lee have in the MCU? "),answer2:"37"},{question2:chalk.bold.cyan("who is the actor for Dormammu in Dr.Strange? "),answer2:"Benedict Cumberbatch"}];

  for(var i=0;i<questions2.length;i++){
  var currentQuestion2 = questions2[i];
  play(currentQuestion2.question2, currentQuestion2.answer2);}
}

if(score===6){
  console.log(chalk.redBright("LEVEL 3 : "));

  var questions3 = [{question3:chalk.bold.cyan("in what film is the Tesseract first seen on screen?"),answer3:"thor"},{question3:chalk.bold.cyan("how many Infinity Stones does Thanos have when he arrives on Titan? "),answer3:"4"},{question3:chalk.bold.cyan("who is the first major character to die in Infinity War? "),answer3:"heimdall"},{question3:chalk.bold.cyan("what is the very first song played in Iron Man? "),answer3:"back in black"}];

  for(var i=0;i<questions3.length;i++){
  var currentQuestion3 = questions3[i];
  play(currentQuestion3.question3, currentQuestion3.answer3);}
}

if(score===10){
  console.log(chalk.bold.green("Congratulations! NEW HIGH SCORE"));
  console.log("send ss so i can update the scores");
} else if(score<=10){
  console.log(chalk.bold.red("Try Again to break the High Scores!"));
}

 console.log(chalk.bold.yellow("HIGH SCORES: ",highScores.name1+" ",highScores.score1));






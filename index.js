//QUIZ

var questions = [
  {
  question: "Who is my favorite superhero? ",
  answer: "ironman"
  },

  {
  question: "Which is my favorite dish? ",
  answer: "biryani"
  },
  
  {
  question: "Which is my favorite color? ",
  answer: "black"
  },

  {
  question: "Who is my favorite cricketer? ",
  answer: "kohli"
  },

  {
  question: "Who is my favorite actor ? ",
  answer: "hritik"
  }

]

var readlineSync = require("readline-sync");
console.log("Hello " + readlineSync.question("What is your name? ") + ", Welocme to DO YOU KNOW PREM quiz")
console.log("---------------------------") 
var score = 0
//console.log(questions[0].question)
function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
  { console.log("You're right");
    score = score + 1;
  }
  else if(score != 0)
  { console.log("You're Wrong");
    score = score - 1;
  }
  else {console.log("You're Wrong")};
  console.log("Your score is: " + score);
  console.log("---------------------------")  
};

for(var i=0; i<questions.length; i++){
  
  quiz(questions[i].question, questions[i].answer)
  
};
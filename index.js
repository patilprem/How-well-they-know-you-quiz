var readlineSync = require("readline-sync");
var score = 0
var userAnswer = readlineSync.question("What is your Name? ");
console.log("Welocome to programming " + userAnswer);
var userAge = readlineSync.question("What is your age? ");
if(userAge > 25)
  { console.log("You're right");
    score = score + 1;
  }
else if(score != 0)
  { console.log("You're Wrong");
    score = score - 1;
  }
else {console.log("You're Wrong")};  
var userCity = readlineSync.question("What is your hometown? ");
if(userCity === "Mumbai")
 { console.log("You're right");
    score = score + 1;
  }
else if(score != 0)
  { console.log("You're Wrong");
    score = score - 1;
  }
else{console.log("You're Wrong")};    
console.log("-----------------------------");
console.log("Your final score is " + score);
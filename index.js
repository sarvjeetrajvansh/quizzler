const readline = require("readline-sync");
console.log("\t *****Welcome to Quizzler*****");
//Taking playerName
const playerName = readline.question("Please Enter Your Name :")
console.log (`Hey ${playerName} !! \nLets see how much you know about me.`);

var score = 0;

function quizEngine(question,correctAnswer){
    let userAnswer= readline.question(question);
    let isAnswerCorrect;
    
    if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()){
        score ++ ;
        isAnswerCorrect=true;
        //console.log("You Guessed it right !!")
    }
     else{
        score --;
        isAnswerCorrect=false;
       // console.log("You messed this buddy !!")
     }

     return isAnswerCorrect;
}

let questionBank = [{
  question: "What is my Surname ?",
  answer : "Rajvansh"
},{
  question: "Where do i live ? ",
  answer : "Banglore"
},{
  question: "What is my favourite color ? ",
  answer : "Blue"
},
{
  question:"What is my primary skillset ?",
  answer:"Kubernetes"
},
{
  question:"What is my favourite dish ?",
  answer:"Paani-Puri"
}
]

for (var iterator=0; iterator < questionBank.length; iterator ++){
let guessValue = quizEngine(questionBank[iterator].question,questionBank[iterator].answer);
console.log("did you guess it right  ?", guessValue);
console.log("Your Score is : ", score);
}

console.log(`You Got ${score} out of ${questionBank.length} correct`);
//quizEngine("What is my Name ?", "Rajvansh");

var leaderBoard = [
{
  player : "Sarvjeet",
  point:5
},{
  player:"Anonymus",
  point: 3
}
]


function isTopScorer(leaderBoard,score){

for(var iterator =0; iterator < leaderBoard.length; iterator ++){
  var result=false;
if (leaderBoard[iterator].point < score)result=true;

}
if(result){
  console.log("You Know me well !!")
}
else{
  console.log("You need to know me more!!")
}

} isTopScorer(leaderBoard,score);
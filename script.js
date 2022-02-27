var count = 15;
var timer = setInterval(function() {
    console.log(count);
    if(count === 0) {
        stopInterval()
    }
}, 1000);

var stopInterval = function() {
    console.log('time is up');
    clearInterval(timer);
}

// Questions
var questions = [
    {
        question: "What is JavaScript?",
        answers: {
            a: "cooking",
            b: "source code",
            c: "styling the website",
        },
        correctAnswer: "a"
    }
]

var questions = []
var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}
alert("Score " + score + "/" + questions.length);

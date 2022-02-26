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

var questions = [
    {
        prompt: "What is JavaScript?\n(1) coding\n\(2) cooking\(c) construction",
        answer: "a"
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

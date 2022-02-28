function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

 function showQuestions(questions, quizContainer){
 }

 function showResults(questions, quizContainer, resultsContainer){
 }

showQuestions(questions, quizContainer);

submitButton.onclick =  function (){
    showResults(questions, quizContainer,resultsContainer);
    }
}



function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for (var i=0; i<questions.length; i++){

        answers = [];

        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                + '<input type="'
            )
        }
    }
}

function showResults(questions, quizContainer, resultsContainer){

    var answerContainers = quizContainer.querySelectorAll('.answers');

    var useranswer = '';
    var numCorrect = 0;

    for(var i=0; i<questions.length; i++){

        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        if(userAnswer===questions[i].correctAnswer){

            numCorrect++;

            answerContainers[i].style.color = 'green';
        }

        else{
            answerContainers[i].style.color = 'red';
        }
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// submit button, show results

// submitButton.onclick = function(){
//     showResults(questions, quizContainer, resultsContainer);
// }

var quizContainer = document.getElementById('quiz');
var results = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');
var title = document.getElementById('questions');
var getAnswers = document.getElementById('answers');

startButton.addEventListener("click", function(){
   title.textContent=(questions[0].question);
})

startButton.addEventListener("click", function(){
    title.textContent=(String[0].answers);
})

// Timer set
var count = 15;
var timer = setInterval(function(){
    document.getElementById('count').innerHTML=count;
    count--;
    if (count === 0){
        clearInterval();
        document.getElementById('count').innerHTML='done';
        alert("You are out of time!");
    }
}, 1000);



// var questions = []
// var score = 0;

// for(var i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//         score++;
//         alert("Correct!");
//     } else {
//         alert("Wrong!");
//     }
// }
// alert("Score " + score + "/" + questions.length);

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
    },

    {
        question: "When was JavaScript made?",
        answers: {
            a: '1993',
            b: '2002',
            c: '2006',
        },
        correctAnswer: 'c'
    }
];
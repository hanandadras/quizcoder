
const welcomeEl = document.getElementById('welcomeEl');
const startBtn = document.getElementById('startBtn');

const quizEl = document.getElementById('quizEl');
const questionH2El = document.getElementById('questionH2El');
const answerBtnEl1 = document.getElementById('answerBtnEl1');
const answerBtnEl2 = document.getElementById('answerBtnEl2');
const answerBtnEl3 = document.getElementById('answerBtnEl3');
const answerBtnEl4 = document.getElementById('answerBtnEl4');
const scoreEl = document.getElementById('scoreEl');
var currentQuestionsIndex = 0;
var timerId;
let questionIndex = 0;



// questions and answers array in a var
const allQuestions = [
  {
    question: "Commonly used data types Do Not <br> Include:",
    Answer1: "strings",
    Answer2: "booleans",
    Answer3: "alerts",
    Answer4: "numbers",
    Correct: "alerts",
  },
  {
    question: "The condition in an if / else statement is <br> enclosed with___________",
    Answer1: "quotes",
    Answer2: "curly brackets",
    Answer3: "parenthesis",
    Answer4: "square brackets",
    Correct: "curly brackets",
  },
  {
    question: "Arrays in Javascript can be used to store<br>_______.",
    Answer1: "numbers and strings",
    Answer2: "other arrays",
    Answer3: "booleans",
    Answer4: "all of the above",
    Correct: "all of the above",
  },
  {
    question: "String values must be enclosed within__________when being assigned to variables.",
    Answer1: "commas",
    Answer2: "curly brackets",
    Answer3: "quotes",
    Answer4: "parenthesis",
    Correct: "quotes",
  },
  {
    
    question: "A very useful tool used during development <br> and debugging for printing content to the <br> debugger is:",
    Answer1: "Javascript",
    Answer2: "Terminal/Bash",
    Answer3: "for loops",
    Answer4: "console.log",
    Correct: "console.log",
  },
]

var time = allQuestions.length * 15;


// when user clicks start
function startQuiz() {
  // - hide welcome message
  welcomeEl.classList.add('hide')
  // - display quiz container
  quizEl.classList.remove('hide')
  loadNextQuestion()
  startTimer()
};

//Start timer

function startTimer() {
  const date = new Date();
  console.log("start time");
  //document.getElementById("Timer").innerHTML = date.toLocaleTimeString();
  var time = 75
  let timeInterval = setInterval(()=> {document.getElementById("Timer").innerHTML=time;
  console.log(time);
  time--}, 1000);
};

// // show timer start
//   timerEl.textContent = timer;

function loadNextQuestion() {
  const currentQuestion = allQuestions[questionIndex]
  console.log(currentQuestion)
  // - display question text
  questionH2El.innerText = currentQuestion.question

  // - display answer buttons
  answerBtnEl1.innerText = currentQuestion.Answer1
  answerBtnEl2.innerText = currentQuestion.Answer2
  answerBtnEl3.innerText = currentQuestion.Answer3
  answerBtnEl4.innerText = currentQuestion.Answer4
};



// - check if answer is correct
function checkAnswer(event) {
  console.log(event)
  const buttonText = event.target.innerText
  console.log(buttonText)

  const correct = allQuestions[questionIndex].Correct
  if (buttonText !== correct) {
      console.log(buttonText===correct)
      time-= 5

  } else {
      console.log(buttonText===correct)

      // if correct
      //    - display correct message

      // Do we have another question?
      if (questionIndex < allQuestions.length - 1) {
          // if yes
          //     - load question
          questionIndex++
          loadNextQuestion()
      } else {
          //  if no
          console.log('load score section')
          //      - stop timer
          //      - display score
          //      - display restart button
      }
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);
}

// clear current question

quizEl.innerHtml = "";

//add event listener to start quiz
startBtn.addEventListener('click', startQuiz)


//add event lsitener upon click to check answer
document
  .getElementById('answerButtons')
  .addEventListener('click', checkAnswer)

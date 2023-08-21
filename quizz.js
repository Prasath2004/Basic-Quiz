
const questions = [
    {
        question: " Which animal is known as the 'Ship of the Desert'?",
        answers: [
            { text: "Sheep", correct: false },
            { text: "Camel", correct: true },
            { text: "Cow", correct: false }
        ]
    },
    {
        question: "How many days are there in a week?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "7", correct: true }
        ]
    },
    {
        question: "How many letters are there in the English alphabet?",
        answers: [
            { text: "26", correct: true },
            { text: "105", correct: false },
            { text: "18", correct: false }
        ]
    },
    {
        question: "Which animal is known as the king of the jungle?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Lion", correct: true },
            { text: "Elephant", correct: false }
        ]
    },
    {
        question: "Name the National animal of India?",
        answers: [
            { text: "Tiger", correct: true },
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-btns");
const nextButton = document.getElementById("next-question");
const message = document.getElementById("show");
let currQuestionindex = 0;
let score = 0;
let start = function startQuiz() {
    currQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "SUBMIT";
    que();
}
let que = function showQuestions() {
    resetState();
    let currentQuestions = questions[currQuestionindex];
    let qusNo = currQuestionindex + 1;
    questionElement.innerHTML = qusNo + ". " + currentQuestions.
        question;
    currentQuestions.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
  // 
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(t) {
    const selectedButton = t.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
       button.disabled = true;
    });
    nextButton.style.display = "absolute";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You score ${score} of ${questions.length} `
    nextButton.style.display = "block";
    nextButton.style.display = 'none';
    message.innerHTML = "<h1>Quizz Completed</h1>";
}
let handel = function handelNextButton() {
    currQuestionindex++;
    if (currQuestionindex < questions.length) {
        que();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currQuestionindex < questions.length) {
        handel();
    } else {
        start();
    }
});
start();


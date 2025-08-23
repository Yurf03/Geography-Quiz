const startPage = document.getElementById("startContainer");
const startButton = document.getElementById("startButton");
const quizPage = document.getElementById("quizContainer");
const questionElement = document.getElementById("questionContainer");
const optionsButtons = document.getElementById("optionsContainer");
const nextButton = document.getElementById("nextButton");
const scorePage = document.getElementById("scoreContainer");
const scoreResult = document.getElementById("score");
const restartButton = document.getElementById("restartButton");



const quizData = [
    {
        question: "What is the tallest mountain in the world?",
        options: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Manaslu", correct: false },
            { text: "Kamet", correct: false }
        ],
    },
    {
        question: "What is the world's largest desert?",
        options: [
            { text: "Sahara Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Syrian Desert", correct: false },
            { text: "Antarctic Desert", correct: true }
        ],
    },
    {
        question: "What is the driest continent on Earth?",
        options: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: false },
            { text: "Antarctica", correct: true },
            { text: "Europe", correct: false }
        ],
    },
    {
        question: "In what ocean is the Bermuda Triangle located?",
        options: [
            { text: "Atlantic Ocean", correct: true },
            { text: "Pacific Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    }
]

function loadQuestions() {
    startPage.style.display = "none";
    quizPage.style.display = "block";
    shuffledQuestions = quizData.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    showNextQuestion();
}
function showNextQuestion() {
    resetState();
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
}

function displayQuestion(question) {
    questionElement.innerText = question.question;
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.classList.add("btn");
        button.style.fontSize = "15px";      
        button.style.width = "30%"; 
        button.style.padding = "15px";
        if (option.correct) {
            button.dataset.correct = option.correct;
        }
        button.addEventListener("click", selectOption);
        
        optionsButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (optionsButtons.firstChild) {
        optionsButtons.removeChild(optionsButtons.firstChild);
    }
}

function selectOption(i) {
    const selectedButton = i.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(optionsButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "Orange"; 
            button.style.color = "white";
        }
        button.disabled = true;
    });
    if (!isCorrect) {
        selectedButton.style.backgroundColor = "purple"; 
        selectedButton.style.color = "white";
    }
    nextButton.style.display = "block";
    nextButton.style.marginLeft = "auto";
    nextButton.style.marginRight = "auto";
}

function showScore() {
    quizPage.style.display = "none";
    scorePage.style.display = "block";
    scoreResult.innerText = `You scored ${score} out of ${shuffledQuestions.length}!`;
}

function restartQuiz() {
    scorePage.style.display = "none";
    startPage.style.display = "block";
}

startButton.addEventListener("click", loadQuestions);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showNextQuestion();
    } else {
        showScore();
    }
});
restartButton.addEventListener("click", restartQuiz);


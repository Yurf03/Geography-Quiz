const startPage = document.getElementById("#startContainer");
const startButton = document.getElementById("#startButton");
const quizPage = document.getElementById("#quizContainer");
const questionElement = document.getElementById("#questionContainer");
const optionsButtons = document.getElementById("#optionsContainer");
const nextButton = document.getElementById("#nextButton");
const scorePage = document.getElementById("#scoreContainer");
const scoreResult = document.getElementById("#score");
const restartButton = document.getElementById("#restartButton");

let shuffledQuestions, currentQuestionIndex, score;

const quizData = [
    {
        question: "what is the tallest mountain in the world?"
        options: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Manaslu", correct: false },
            { text: "Kamet", correct: false }
        ]
    }
    {
        question: "what is the worlds largest desert?"
        options: [
            { text: "Sahara Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Syrian Desert", correct: false },
            { text: "Antarctic Desert", correct: true }
        ]
    }
    {
        question: "what is the driest continent on Earth?"
        options: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: false },
            { text: "Antarctica", correct: true },
            { text: "Europe", correct: false }
        ]
    }
    {
        question: "In what ocean is the Bermuda Triangle located?"
        options: [
            { text: "Atlantic Ocean", correct: true },
            { text: "Pacific Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    }
]
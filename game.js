const question = document.querySelector('#question');
const choices = Array.from(document.getElementsByClassName('.choice-text'));
const progressText = document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Who is the creator of the television series Grey's Anatomy?",
        choice1: "Shonda Rhimes",
        choice2: "Michael Crichton",
        choice3: "David Shore",
        choice4: "Ryan Murphy",
        answer: 1,
    },

    {
        question: "Where is Grey's Anatomy set?",
        choice1: "Boston",
        choice2: "New York",
        choice3: "Seattle",
        choice4: "Chicago",
        answer: 3,
    },

    {
        question: "Who is the lead character in Grey's Anatomy?",
        choice1: "Georage",
        choice2: "Derek",
        choice3: "Bailey",
        choice4: "Meredith",
        answer: 4,
    },

    {
        question: "What is the name of the hospital featured in the beginning of the series?",
        choice1: "Seattle General Hospital",
        choice2: "Seattle Grace Hospital",
        choice3: "Grey Sloan Memorial Hospital",
        choice4: "Washington General Hospital",
        answer: 2,
    },

    {
        question: "Who did Meredith Grey marry?",
        choice1: "Dr. Webber",
        choice2: "Dr. Burke",
        choice3: "Dr. Shepherd",
        choice4: "Dr. O'Malley",
        answer: 3,
    },

    {
        question: "Why did Teddy marry Henry?",
        choice1: "Henry's son needed medical insurance for a surgery.",
        choice2: "Teddy saved Henry's mother from dying",
        choice3: "They fell in love",
        choice4: "Henry needed medical insurance",
        answer: 4,
    },

    {
        question: "In which season did the character George O'Malley die?",
        choice1: "Season Six",
        choice2: "Season Five",
        choice3: "Season Four",
        choice4: "Season Ten",
        answer: 2,
    },

    {
        question: "What causes the deaths of Lexie Grey and Mark Sloan?",
        choice1: "Infection",
        choice2: "Plane Crash",
        choice3: "Bomb",
        choice4: "Shooting",
        answer: 2,
    },

    {
        question: "How many kids does Meredith have and what are their names?",
        choice1: "3 : Emma, John & Billy",
        choice2: "2 : Zoey & John",
        choice3: "5 : Zola, Bailey, John, Billy & Ellis",
        choice4: "3 : Zola, Bailey & Ellis",
        answer: 4,
    },

    {
        question: "What is Dr. Derek Shepherd's cause of death in the show?",
        choice1: "Cancer",
        choice2: "Animal Attack",
        choice3: "Car Wreck",
        choice4: "Plane Crash",
        answer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
    
        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
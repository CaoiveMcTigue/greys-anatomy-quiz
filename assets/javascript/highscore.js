//setting out vairables to manipulate the Dom.
const username = document.querySelector('#username');
const saveScore = document.querySelector('#saveScore');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
//setting variables to be use in functions below
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 10;

finalScore.innerText = mostRecentScore;

//reenable the save button 
username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value
});
//ensure page does not auto refresh when button is clicked 
saveHighScore = e => {
    e.preventDefault()

//save score from quiz
    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    });

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/index.html')
};
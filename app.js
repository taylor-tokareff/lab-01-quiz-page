// import functions and grab DOM elements

import { isYes } from "./isYesFunk.js";

// initialize state

// set event listeners to update state and DOM

const quizButton = document.getElementById('quiz-button')
const testResults = document.getElementById('test-results')


quizButton.addEventListener('click', () =>{

    let score = 0
    
    alert ('Let\'s play a little game :D');

    const userName = prompt('What is you name?');
    const confirmQuiz = confirm(`Would you like to take a quiz, ${userName}?`);

    if(confirmQuiz === false){
        alert(':(');
        return;
    }

    const response = prompt('Are dogs cool?');
    const firstAnswer = isYes(response)

    if (firstAnswer === true) {
        // score = score+1
        // score += 1
        score++ 
    }

    const response2 = prompt('Are dogs descendants of wolves?');
    const secondAnswer = isYes(response2)

    if (secondAnswer === true) {
        // score = score+1
        // score += 1
        score++ 
    }

    const response3 = prompt('Do I like dogs?');
    const thirdAnswer = isYes(response3)

    if (thirdAnswer === true) {
        // score = score+1
        // score += 1
        score++ 
    }

    testResults.textContent = `You scored ${score} points`
}) 



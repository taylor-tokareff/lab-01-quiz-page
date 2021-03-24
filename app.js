// import functions and grab DOM elements

import { isYes } from "./isYesFunk.js";

// initialize state

// set event listeners to update state and DOM

const quizButton = document.getElementById('quiz-button')
const testResults = document.getElementById('test-results')


quizButton.addEventListener('click', () =>{

    let score = 0
    
    alert ('Let\'s play a little game :D');
    const confirmQuiz = confirm ('Would you like to take a quiz?');
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

    


    testResults.textContent = score
}) 


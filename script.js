'use strict';

// console.log( document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 34

// document.querySelector('.guess').value = 23
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);
    if (!guess) {

        // document.querySelector('.message').textContent = '🚫 No Number';
        displayMessage('🚫 No Number');

    } else if (guess === secretNumber) {
        displayMessage('🎉Correct Number!');
        //document.querySelector('.message').textContent = '🎉Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }


    } else if(guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ?  '💹 too high' : '♌ too low');
            // document.querySelector('.message').textContent = 
            // guess > secretNumber ?  '💹 too high' : '♌ too low' ;
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('🤧 You lost the game');
            //document.querySelector('.message').textContent = '🤧 You lost the game';
            document.querySelector('.score').textContent = 0
        }
    }
    // else if (guess > secretNumber) {

    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '💹 too high';
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = '🤧 You lost the game';
    //         document.querySelector('.score').textContent = 0
    //     }
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '♌ too low';
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = '🤧 You lost the game';
    //         document.querySelector('.score').textContent = 0
    //     }
    // }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // window.location.reload();
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '13rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = ''

})
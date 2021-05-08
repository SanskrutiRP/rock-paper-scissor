//Javascript code for the rock paper scissors
//
// 
let buttons = [document.getElementById('rock'),document.getElementById('paper'),document.getElementById('scissor')];
const choices=['paper','rock','scissor'];
let userChoice = undefined;
let userScore = 0;
let userWinCount = 0;
let computerScore = 0;
let count = 0;
let userSelect = document.getElementById('userSelection');
let commpSelect = document.getElementById('compSelection');
let winStatus = document.getElementById('win');
let compScore = document.getElementById('computerScore');
let usrScore = document.getElementById('userScore');
let winner_dec = document.getElementById('winner_decision');
let winner_up = document.getElementById('winner');
let game = document.getElementById('game_panel');
let detail = document.getElementById('displayChoice');
let play = document.getElementById('play');
let rules = document.getElementById('rules_btn');
let exit = document.getElementById('exit');
let gamePage = document.getElementById('game');
let rulesPage = document.getElementById('rules');

// function to get computers choice
function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

// user choice
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        userChoice = button.getAttribute('id');
        console.log(userChoice)
        updateSelection(userSelect, userChoice);
        chooseWinner();
    });
});

//decide winner
function chooseWinner(){
    if( count < 5){
        
        const computerChoice = pickRandomChoice();
        updateSelection(commpSelect, computerChoice);
        if(userChoice === computerChoice){
            console.log('draw');
            winStatus.innerText = 'Draw';
        }
        else if(userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissor' || userChoice === 'scissor' && computerChoice === 'paper'){
            console.log('Usr won');
            count++;
            winStatus.innerText = 'You won';
            updateScore(1);
        }
        else{
            console.log('Computer won');
            count++;
            winStatus.innerText = 'Computer won';
            updateScore(-1);
        }
    }
    else{
        updateWinner();
    }
}

//update score
function updateScore(value){
    userScore += value;
    computerScore -= value;
}

// update selection
function updateSelection(selectionEl, choice){
    //remove class
    selectionEl.classList.remove('rock');
    selectionEl.classList.add(choice);

    //add new class
    selectionEl.querySelector('img').src = `Images/${choice}.jpeg`;
    selectionEl.querySelector('img').alt = choice;
}


// update winner
function updateWinner(){
    //winner_up.style.
    winner_up.style.display = 'flex';
    game.style.display = 'none';
    detail.style.display = 'none';
    usrScore.innerText = userScore;
    compScore.innerText = computerScore;
    if(userScore > computerScore){
        userWinCount++;
        //winStatus.innerText = 'You Won';
        document.getElementById('score_p').innerText = userWinCount ;
        winner_dec.innerText = 'You Won';
    }
    else
        //winStatus.innerText = 'You lost';
        winner_dec.innerText = 'You Lost';
    //disabling buttons
    buttons.forEach((button) =>{
        button.disabled = true;
    });
}

play.addEventListener('click', () => {
    winner_up.style.display = 'none';
    game.style.display = 'flex';
    detail.style.display = 'flex'; 
    count = 0;
    winStatus.innerText = `Let's Start`;
    buttons.forEach((button) =>{
        button.disabled = false;
    });
});

rules.addEventListener('click', () => {
    rulesPage.style.display = 'flex';
    gamePage.style.display = 'none'
});

exit.addEventListener('click', () => {
    rulesPage.style.display = 'none';
    gamePage.style.display = 'flex'
});
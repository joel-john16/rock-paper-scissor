let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0,
  totalPlays : 0
};

let result = '';
updateScore();

function playerMove(playerMove) {
  const computerMove = pickComputerMove();
  
  score.totalPlays = score.wins + score.losses + score.ties + 1;

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
    result = 'Tie.'
    }
    else if (computerMove === 'Paper') {
      result = 'You lose.'
    }
    else if (computerMove === 'Scissor') {
      result = 'You win.'
    }   
  }
  else if (playerMove === 'Scissor') {
    if (computerMove === 'Rock') {
    result = 'You lose.'
    }
    else if (computerMove === 'Paper') {
      result = 'You win.'
    }
    else if (computerMove === 'Scissor') {
      result = 'Tie.'
    }          
  }
  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
    result = 'You win.'
    }
    else if (computerMove === 'Paper') {
      result = 'Tie.'
    }
    else if (computerMove === 'Scissor') {
      result = 'You lose.'
    }          
  }

  if (result === 'You win.') {
    score.wins += 1;
  }
  else if (result === 'You lose.') {
    score.losses += 1;
  }
  else if (result === 'Tie.') {
    score.ties +=1 ;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-move')
      .innerHTML = `You picked <img class="move-emoji" src="images/${playerMove}-emoji.png" alt="${playerMove}">
        Computer picked <img class="move-emoji" src="images/${computerMove}-emoji.png" alt="${computerMove}">`;
}


function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  }
  else if (randomNumber >= 2/3 && randomNumber <= 1){
    computerMove = 'Scissor';
  }
  let result = '';
  return computerMove;
}

function updateScore() {
  document.querySelector('.js-score')
    .innerHTML = `Total plays = ${score.totalPlays}, Wins = ${score.wins}, Losses = ${score.losses},  Ties = ${score.ties}`;
}




let isAutoPlay = false;
let intervalId;
function autoPlay(){
  if (!isAutoPlay){
    intervalId = setInterval(() => {
      let move = pickComputerMove();
      playerMove(move);
    },1500);
    console.log(document.querySelector('.js-result'));
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
  }

  const autoPlayButtonElement = document.querySelector('.js-auto-play-button');
  if (autoPlayButtonElement.innerHTML === 'Auto Play'){
    autoPlayButtonElement.innerHTML = 'Stop Play'
  }else if (autoPlayButtonElement.innerHTML === 'Stop Play'){
    autoPlayButtonElement.innerHTML = 'Auto Play'
  }
}





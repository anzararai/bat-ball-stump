let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) : {
    won : 0,
    loss : 0,
    tie : 0,
  };
  
  score.displayScore = function(){
    return  `your total score are:
    won : ${score.won}
    Loss : ${score.loss}
    Tie : ${score.tie}`;
  };
  showResult();
}

function generateComputerChoice(){
  const randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1){ 
    return 'Bat';
  }
  else if (randomNumber > 1 && randomNumber <= 2){
    return 'Ball';
  }
  else {
    return 'Stump';
  }
}

function getResult(userMove, computerChoice){
  if(userMove === 'Bat'){
    if (computerChoice === 'Bat'){
      score.tie++;
      return 'Tie';
    }
    else if (computerChoice === 'Ball'){
      score.won++;
      return 'You won';
    }
    else if (computerChoice === 'Stump'){
      score.loss++;
      return 'You loss';
    }
  }else if(userMove === 'Ball'){
    if (computerChoice === 'Bat'){
      score.loss++;
      return 'You loss';
    }
    else if (computerChoice === 'Ball'){
      score.tie++;
      return 'Tie';
    }
    else if (computerChoice === 'Stump'){
      score.won++;
      return 'You won';
    }
  }else {
    if (computerChoice === 'Bat'){
      score.won++;
      return 'You won';
    }
    else if (computerChoice === 'Ball'){
      score.loss++;
      return 'you loss';
    }
    else if (computerChoice === 'Stump'){
      score.tie++;
      return 'Tie';
    }
  }
}

function showResult(UC, CC, result){
  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('#user-move').innerText = 
    UC !== undefined ? `You choose ${UC}` : '';

  document.querySelector('#computer-move').innerText = 
    CC ? `Computer chooses ${CC}`: '';

  document.querySelector('#result').innerText = 
    result !== undefined ? `result is ${result}` : '';

  document.querySelector('#score').innerText = `${score.displayScore()}`;
}

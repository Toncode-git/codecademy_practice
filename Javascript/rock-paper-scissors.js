const getUserChoice = (userInput) =>{
  userInput = userInput.toLowerCase();

  if(userInput === 'rock'){
    return userInput;
  } 
  else if (userInput === 'paper'){
    return userInput;
  }
  else if (userInput === 'scissors'){
    return userInput;
  } 
  else if(userInput === 'bomb'){
    return userInput;
  }
  else{
    return 'error';
  }
};

// console.log('user: '+ getUserChoice('rock'));

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

// console.log('computer: '+ getComputerChoice());

function determineWinner(userChoice, computerChoice){
    
    if(userChoice === 'bomb'){
      return 'You Won!';
    }
    if(userChoice === computerChoice){
      return 'tie';
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
          return 'Computer won';
      } else {
          return 'You won!';
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Computer won';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Computer won';
      } else {
        return 'You won!';
      }
    }
  };

// console.log('\n' + determineWinner('rock','scissors'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();




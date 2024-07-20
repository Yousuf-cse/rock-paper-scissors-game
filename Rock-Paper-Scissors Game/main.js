// alert("Rock-Paper-Scissors is a classic hand game that is simple to play and fun for all ages. The game is typically played between two players. Each player simultaneously forms one of three shapes with an outstretched hand")

let scoreStr = localStorage.getItem('Score');
    let score;
    resetScore(scoreStr);

    function resetScore(scoreStr) {
      score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
      };

      score.displayScore = function() {
        return `Score:Won:${score.win}, Lost:${score.lost}, Tie: ${score.tie}`;
      };

      showResult();
    }

    function generateComputerChoice() {
      //This will generate random number between 0 and 3
      let randomNumber = Math.random() * 3;
      if (randomNumber > 0 && randomNumber <= 1) {
        return 'stone';
      } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'paper';
      } else {
        return 'scissor'
      }
    }

    function getResult(userMove, computerMove) {
      if (userMove === 'stone') {
        if (computerMove === 'paper') {
          score.lost++;
          return 'Computer has won';
        } else if (computerMove === 'stone') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'scissor') {
          score.win++;
          return 'You Won';
        }
      } else if (userMove === 'paper') {
        if (computerMove === 'paper') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'stone') {
          score.win++;
          return 'You won.';
        } else if (computerMove === 'scissor') {
          score.lost++;
          return 'Computer has won';
        }
      } else {
        if (computerMove === 'scissor') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'stone') {
          score.lost++;
          return 'Computer has won';
        } else if (computerMove === 'paper') {
          score.win++;
          return 'You won.';
        }
      }
    }

    function showResult(userMove, computerMove, result) {
      localStorage.setItem('Score', JSON.stringify(score));
      
      document.querySelector('#user-move').innerText = 
        userMove ? `You have chosen ${userMove}` : '';
      
      document.querySelector('#computer-move').innerText =
        computerMove ? `Computer choice is ${computerMove}` : '';
      
      document.querySelector('#result').innerText = result || '';

      document.querySelector('#score').innerText = score.displayScore();
    }

    // const celebration =()=>{
    //   if (score.win===10) {
    //     confetti.start();
    //   }
    // }

    
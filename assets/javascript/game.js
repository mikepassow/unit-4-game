

// Variables for scores

var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = 0;
var log = console.log;

// Variables for crystals

var randomNumber = Math.floor(Math.random() * 102) + 19;

var blueCrystalNumber = Math.floor(Math.random() * 12) + 1;

var redCrystalNumber = Math.floor(Math.random() * 12) + 1;

var pinkCrystalNumber = Math.floor(Math.random() * 12) + 1;

var greenCrystalNumber = Math.floor(Math.random() * 12) + 1;

$('.randomNumber').text(randomNumber);

// When the user clicks the red crystal this adds the random number to the variable total score
$(".redCrystalNumber").on("click", function() {
   totalScore += redCrystalNumber;
    $(".total-score").text(totalScore);
    log(redCrystalNumber);
    winLoseCondition();
  
  });
  
  // // When user clicks the blue crystal this adds the random number to the variable total score
  $(".blueCrystalNumber").on("click", function() {
  
    totalScore += blueCrystalNumber;
    $(".total-score").text(totalScore);
    log(blueCrystalNumber);
    winLoseCondition();
  
  });
  
  // When user clicks the green crystal this adds the random number to the variable total score
  $(".greenCrystalNumber").on("click", function() {
  
    totalScore += greenCrystalNumber;
    $(".total-score").text(totalScore);
    log(greenCrystalNumber);
    winLoseCondition();
  
  });
  
  // When user clicks the pink crystal this adds the random number to the variable total score
  $(".pinkCrystalNumber").on("click", function() {
  
    totalScore += pinkCrystalNumber;
    $(".total-score").text(totalScore);
    log(pinkCrystalNumber);
    winLoseCondition();
  
  });
  
  $(".total-Score").text(totalScore); // This is to display 0 as total score when the game start.
  
  
  function winLoseCondition (){
  
    if (totalScore === randomNumber) {
      wins++;
      restart();
    } 
  
    if (totalScore > randomNumber) {
      losses++
      restart();
    }
  
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);

    if (wins === 3) {
      alert("YOU WIN! Reload the page to play again")
    }
    if (losses === 3) {
      alert("YOU LOSE! Reload the page to play again")
    }
    
  };

  
  // Resets random number to match, random numbers assigned to each crystals, total score.
  function restart() {
    randomNumber = Math.floor(Math.random() * 102) + 19;
    // console.log(randomNumber);
    redCrystalNumber = Math.floor(Math.random() * 12) + 1;
    
    blueCrystalNumber = Math.floor(Math.random() * 12) + 1;
    
    pinkCrystalNumber = Math.floor(Math.random() * 12) + 1;
   
    greenCrystalNumber = Math.floor(Math.random() * 12) + 1;
   
    totalScore = 0;
    $(".total-Score").text(totalScore);
    $(".randomNumber").text(randomNumber);
  }
  

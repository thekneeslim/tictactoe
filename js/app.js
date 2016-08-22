console.log('Hello frontend');

var x = "X";
var o= "O";
var turn = 3;
var blank = "";
var i = 0;
var winner = 0;
var m = 0;

var box1 = document.getElementById("one");
var box2 = document.getElementById("two");
var box3 = document.getElementById("three");
var box4 = document.getElementById("four");
var box5 = document.getElementById("five");
var box6 = document.getElementById("six");
var box7 = document.getElementById("seven");
var box8 = document.getElementById("eight");
var box9 = document.getElementById("nine");

var b1 = box1.innerHTML;
var b2 = box2.innerHTML;
var b3 = box3.innerHTML;
var b4 = box4.innerHTML;
var b5 = box5.innerHTML;
var b6 = box6.innerHTML;
var b7 = box7.innerHTML;
var b8 = box8.innerHTML;
var b9 = box9.innerHTML;

var pScore = document.getElementById("playerScore").innerHTML;
var tScore = document.getElementById("tieScore").innerHTML;
var cScore = document.getElementById("computerScore").innerHTML;

var grid = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

grid[0].onclick = function() {
  console.log("clicked box 1!");
  i = 0;
  checkWhoseTurn();
};

grid[1].onclick =  function() {
  console.log("clicked box 2!");
  i = 1;
  checkWhoseTurn();
};

grid[2].onclick = function() {
  i = 2;
  console.log("clicked box 3!");
  checkWhoseTurn();
};

grid[3].onclick = function() {
  i = 3;
  console.log("clicked box 4!");
  checkWhoseTurn();
};

grid[4].onclick = function() {
  i = 4;
  console.log("clicked box 5!");
  checkWhoseTurn();
};

grid[5].onclick = function() {
  i = 5;
  console.log("clicked box 6!");
  checkWhoseTurn();
};

grid[6].onclick = function() {
  i = 6;
  console.log("clicked box 7!");
  checkWhoseTurn();
};

grid[7].onclick = function() {
  i = 7;
  console.log("clicked box 8!");
  checkWhoseTurn();
};

grid[8].onclick = function() {
  i = 8;
  console.log("clicked box 9!");
  checkWhoseTurn();
};

function checkWhoseTurn() {
  console.log("checking whose turn!");
  if (turn % 2 !== 0) {
    console.log("Player's turn!");
    if (grid[i].innerHTML !== blank) {
      console.log("Player has to choose again!");
      alert("Select another box!");
    } else {
      console.log("Player made a move");
      grid[i].innerHTML = x;
      checkFill();
      console.log("Player filled Box " + i);
      turn = turn + 1;
    }
  } else {
    console.log("Computer's Turn part1");
    cTurn();
    checkFill();
    turn = turn + 1;
  }
}

function cTurn() {
  console.log("Computer turn part2", randomN());
  randomN;
  z = randomN();
  computerFills();
}

function computerFills() {
  var z = Math.random();
  // Math.random();
  console.log("Computer turn part3");
  if (z < 0.11) {
    if (b1 === blank ) {
      console.log("Filling b1");
      m = 0;
    }
  } else if (z < 0.22) {
    if (b2 === blank ) {
      console.log("Filling b2");
      m = 1;
    }
  } else if (z < 0.33) {
    if (b3 !== x && b3 !== o) {
      console.log("Filling b3");
      m = 2;
    }
  } else if (z < 0.44) {
    if (b4 === blank ) {
      console.log("Filling b4");
      m = 3;
    }
  } else if (z < 0.55) {
    if (b5 === blank ) {
      console.log("Filling b5");
      m = 4;
    }
  } else if (z < 0.66) {
    if (b6 === blank ) {
      console.log("Filling b6");
      m = 5;
    }
  } else if (z < 0.77) {
    if (b7 === blank ) {
      console.log("Filling b7");
      m = 6;
    }
  } else if (z < 0.88) {
    if (b8 === blank ) {
      console.log("Filling b8");
      m = 7;
    }
  } else if (z < 1){
    if (b9 === blank ) {
      console.log("Filling b9");
      m = 8;
    }
  } else {
    console.log("Still stuck here sigh.")
    computerFills();
  }
  grid[m].innerHTML = o;
}

function randomN() {
  return Math.random();
}

function checkFill() {
  console.log("Checking filling")
  if (b1 !== blank && b2 !== blank && b3 !== blank) {
    checkWin();
  } else if (b4 !== blank && b5 !== blank && b6 !== blank) {
    checkWin();
  } else if (b7 !== blank && b8 !== blank && b9 !== blank) {
    checkWin();
  } else if (b1 !== blank && b5 !== blank && b9 !== blank) {
    checkWin();
  } else if (b3 !== blank && b5 !== blank && b7 !== blank) {
    checkWin();
  } else {
    return;
  }
}

function player() {
  console.log("Checking player!")
  if (turn%2 !== 0) {
    return "Player";
  } else {
    return "Computer"
  }
}

function checkWin() {
  console.log("Checking who the winner is!")
  if (b1 === b2 && b2 === b3 && b1 !== blank) {
    winner = player();
    updateWinner();
  } else if (b4 === b5 && b5 === b6 && b6 !== blank) {
    winner = player();
    updateWinner();
  } else if (b7 === b8 && b8 === b9 && b9!== blank){
    winner = player();
    updateWinner();
  } else if (b1 === b4 && b4 === b7 && b7 !== blank) {
    winner = player();
    updateWinner();
  } else if (b2 === b5 && b5 === b8 && b8 !== blank) {
    winner = player();
    updateWinner();
  } else if (b3 === b6 && b6 === b9 && b9 !== blank) {
    winner = player();
    updateWinner();
  } else if (b1 === b5 && b5 === b9 && b9 !== blank) {
    winner = player();
    updateWinner();
  } else if (b3 === b5 && b5 === b7 && b7 !== blank) {
    winner = player();
    updateWinner();
  } else if (b1 !== blank && b2 !== blank && b3 !== blank && b4 !== blank && b5 !== blank && b6 !== blank && b7 !== blank && b8 !== blank && b9 !== blank){
    winner = tie;
    updateWinner();
  } else {
    return;
  }
}

function updateWinner() {
  console.log("Updating winner!")
  if (winner === "Player") {
    pScore = pScore + 1;
    alert("Player wins!");
  } else if (winner === "Computer") {
    alert("Computer wins!");
    cScore = cScore + 1;
  } else {
    alert("It's a tie!");
    tScore = tScore + 1;
  }
}

document.getElementById("reset").addEventListener("click", function() {
  for(var k = 0; k < grid.length; k ++) {
    grid[k].innerHTML = "";
  }
})

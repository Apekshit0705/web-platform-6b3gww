const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

// Check for a winner
function checkForWinner() {
  let winner = null;
  winningCombinations.forEach(combination => {
    const box1 = document.querySelector(`#box-${combination[0]}`);
    const box2 = document.querySelector(`#box-${combination[1]}`);
    const box3 = document.querySelector(`#box-${combination[2]}`);

    if (box1.textContent !== "" && box1.textContent === box2.textContent && box2.textContent === box3.textContent) {
      winner = box1.textContent;
    }
  });

  if (winner !== null) {
    alert(`Player ${winner} wins!`);
  }
}

// Add click event to all table cells
const boxes = document.querySelectorAll("td");
boxes.forEach(box => {
  box.addEventListener("click", function() {
    if (this.textContent === "") {
      this.textContent = currentPlayer;
      checkForWinner();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
});

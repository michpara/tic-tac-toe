const GameBoard = (() => {
	let size = 3;
	let gameboard = new Array(size);
	for(var i = 0; i<size; i++){
		gameboard[i] = new Array(size);
	}

	const getGameBoard = () => gameboard;

	const displayGameBoard = () => {
		let rows = gameboard.length;
		let cols = gameboard[0].length;
		let gameboardDiv = document.querySelector("#gameboard");
		for(var row = 0; row < rows; row++){
			for(var col = 0; col < cols; col++){
				var cell = document.createElement("div");
				cell.innerHTML = gameboard[col][row];
				cell.setAttribute("class", "cell");
				gameboardDiv.appendChild(cell);

				cell.style.top = row * 110 + "px";
				cell.style.left = col * 110 + "px";
			}
		}
	}

	return {getGameBoard, displayGameBoard};
})();

const Player = (symbol) => {
  const getSymbol = () => symbol;

  return {getSymbol};
};

const Game = ((player1, player2, gameboard) => {

})();


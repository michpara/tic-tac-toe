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
				cell.id = [row, col];
				cell.setAttribute("class", "cell");
				gameboardDiv.appendChild(cell);

				cell.style.top = row * 110 + "px";
				cell.style.left = col * 110 + "px";
			}
		}
	}

	const play = (symbol, row, col) => {
		gameboard[col][row] = symbol;
		displayGameBoard();
		Game.listen();
	}

	return {getGameBoard, displayGameBoard, play};
})();

const Player = (symbol) => {
  const getSymbol = () => symbol;

  return {getSymbol};
};

const Game = (() => {
	const player1 = Player("X");
	const player2 = Player("O");
	GameBoard.displayGameBoard();

	const listen = () => {
		const cells = document.getElementsByClassName("cell");
		Array.from(cells).forEach((cell) => {
			cell.addEventListener("click", function(){
				GameBoard.play(player1.getSymbol, parseInt(cell.id[0]), parseInt(cell.id[2]))
			})
		});
	}
	return {listen};
})();

Game.listen();
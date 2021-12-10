const GameBoard = (() => {
	const size = 3;
	let gameboard = [["", "", ""], ["", "", ""], ["", "", ""]];

	const getGameBoard = () => gameboard;

	const displayGameBoard = () => {
		let rows = gameboard.length;
		let cols = gameboard[0].length;
		let gameboardDiv = document.querySelector("#gameboard");
		for(var row = 0; row < rows; row++){
			for(var col = 0; col < cols; col++){
				var cell = document.createElement("div");
				cell.innerHTML = gameboard[row][col];
				cell.id = [row, col];
				cell.setAttribute("class", "cell");
				gameboardDiv.appendChild(cell);

				cell.style.top = row * 110 + "px";
				cell.style.left = col * 110 + "px";
			}
		}
	};

	const play = (player, row, col) => {
		symbol = player.getSymbol();
		gameboard[row][col] = symbol;
		displayGameBoard();
		if(GameBoard.gameOver(symbol, row, col) == 0){
			console.log("The game is over! " + player.getName() + " is the winner!");
		} else if (GameBoard.gameOver(symbol, row, col) == 1){
			console.log("It is a draw!")
		}
		Game.listen();
		Game.increaseMoveCount();
	};

	const gameOver = (symbol, row, col) => {

		for(var i = 0; i<size; i++){
			if(gameboard[row][i] != symbol){
				console.log(symbol)
				break;
			}
			if(i == size-1){
            	return 0;
            }
		}

		for(var i = 0; i<size; i++){
			if(gameboard[i][col] != symbol){
				break;
			}
			if(i == size-1){
            	return 0;
            }
		}

		if(row == col){
			for(var i = 0; i<size; i++){
				if(gameboard[i][i] != symbol){
					break;
				}
				if(i == size-1){
           		 	return 0;
            	}
			}
		}
		if(row + col == size-1){
			for(var i = 0; i<size; i++){
				if(gameboard[i][size-1-i] != symbol){
					break;
				}
				if(i == size-1){
            		return 0;
           		}
			}
		}
		if(Game.getMoveCount() >= (size*size-1)){
			return 1
		}
	}

	return {getGameBoard, displayGameBoard, play, gameOver};
})();

const Player = (symbol, name) => {
  const getSymbol = () => symbol;
  const getName = () => name;
  return {getSymbol, getName};
};

const Game = (() => {
	const player1 = Player("X", "Michelle");
	const player2 = Player("O", "Carmen");

	let turn = false;

	let moveCount = 0;

	GameBoard.displayGameBoard();

	const getMoveCount = () => {
		return moveCount;
	};

	const increaseMoveCount = () => {
		moveCount++;
	};

	const listen = () => {
		const cells = document.getElementsByClassName("cell");
			if(turn){
				player = player2;
				turn = false;
			} else {
				player = player1;
				turn = true;
			}
		Array.from(cells).forEach((cell) => {
			cell.addEventListener("click", function(){
				GameBoard.play(player, parseInt(cell.id[0]), parseInt(cell.id[2]))
			})
		});
	};
	return {listen, moveCount, getMoveCount, increaseMoveCount};
})();

Game.listen();
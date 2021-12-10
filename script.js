const GameBoard = () => {
	let size = 3;
	let gamebaord = new Array(size);
	for(var i = 0; i<size; i++){
		gameboard[i] = new Array(size);
	}
	const getGameBoard = () => gameboard;

	return {getGameBoard}
}

const Player = (symbol) => {
  const getSymbol = () => symbol;

  return {getSymbol}
};

const Game = (player1, player2, gameboard) => {
	
}

import New from './ui-code/window';
import Player from './factories/player';
import Board from './factories/gameboard';
import Ship from './factories/ship';

const myWindow = document.querySelector('.my-window');
const opWindow = document.querySelector('.op-window');
const startButton = document.querySelector('.start')

const newBoard = New();

newBoard.makeBoard(myWindow);

newBoard.makeBoard(opWindow, 100)

startButton.addEventListener('click', () => {
    const board1 = Board();
    const ship1 = Ship(['A1','B1','C1','D1']);

    const board2 = Board();
    const ship2 = Ship(['A5','B5','C5','D5']);

    board1.placeShip(ship1);
    board2.placeShip(ship2);

    const player1 = Player(board1, board2);

    newBoard.populate(player1);
    
})













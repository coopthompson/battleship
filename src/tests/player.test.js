import Ship from "../factories/ship";
import Board from "../factories/gameboard";
import Player from "../factories/player";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

test('assign board to player', () => {
    
    const board1 = Board();
    const ship1 = Ship(['A1','B1','C1','D1']);

    const board2 = Board();
    const ship2 = Ship(['A5','B5','C5','D5']);

    board1.placeShip(ship1);
    board2.placeShip(ship2);

    const player1 = Player(board1, board2);

    expect(player1.playerBoard.boardContents).toStrictEqual([[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])
    expect(player1.opponentBoard.boardContents).toStrictEqual([[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])
})

test('make a move, miss', () => {
    const board1 = Board();
    const ship1 = Ship(['A1','B1','C1','D1']);

    const board2 = Board();
    const ship2 = Ship(['A5','B5','C5','D5']);

    board1.placeShip(ship1);
    board2.placeShip(ship2);

    const player1 = Player(board1, board2);

    player1.makeMove('A1');
    player1.makeMove('J5');


    expect(player1.playerBoard.boardContents).toStrictEqual([[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])
    expect(player1.opponentBoard.boardContents).toStrictEqual([[3,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,3,0,0,0,0,0]])
})

test('make a move, hit', () => {
    const board1 = Board();
    const ship1 = Ship(['A1','B1','C1','D1']);

    const board2 = Board();
    const ship2 = Ship(['A5','B5','C5','D5']);

    board1.placeShip(ship1);
    board2.placeShip(ship2);

    const player1 = Player(board1, board2);

    player1.makeMove('A5');
    player1.makeMove('B5');
    player1.makeMove('D5')


    expect(player1.playerBoard.boardContents).toStrictEqual([[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])
    expect(player1.opponentBoard.boardContents).toStrictEqual([[0,0,0,0,2,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])
})

test('win the game', () => {
    const board1 = Board();
    const ship1 = Ship(['A1','B1','C1','D1']);

    const board2 = Board();
    const ship2 = Ship(['A5','B5','C5','D5']);

    board1.placeShip(ship1);
    board2.placeShip(ship2);

    const player1 = Player(board1, board2);

    player1.makeMove('A5');
    player1.makeMove('B5');
    player1.makeMove('C5');


    expect(player1.makeMove('D5')).toBe('You win')
})

test('attack same spot', () => {
    const board1 = Board();
    const ship1 = Ship(['A1','B1','C1','D1']);

    const board2 = Board();
    const ship2 = Ship(['A5','B5','C5','D5']);

    board1.placeShip(ship1);
    board2.placeShip(ship2);

    const player1 = Player(board1, board2);

    player1.makeMove('A5');


    expect(player1.makeMove('A5')).toBe('You already tried that spot!')
    expect(player1.opponentBoard.boardContents).toStrictEqual([[0,0,0,0,2,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])
})

test('computer attacks', () => {

    const board1 = Board();
    const ship1 = Ship(['A1','B1','C1','D1']);

    const board2 = Board();
    const ship2 = Ship(['A5','B5','C5','D5']);

    board1.placeShip(ship1);
    board2.placeShip(ship2);

    const computer = Player(board1, board2);

    computer.computerMove();

    expect(computer.opponentBoard.boardContents).toStrictEqual([[0,0,0,0,1,0,0,0,0,0],[0,0,3,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])
})



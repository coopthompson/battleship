import Ship from "../factories/ship";
import Board from "../factories/gameboard";


test('record new ship on board', () => {
    const board1 = Board()
    const ship7 = Ship(['A1','B1','C1','D1'])


    expect(board1.boardContents).toStrictEqual([[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])
})

test('record new ship on board', () => {
    const board1 = Board();
    const ship7 = Ship(['A1','B1','C1','D1']);
    board1.placeShip(ship7);


    expect(board1.boardContents).toStrictEqual([[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])
})

test('Use a 10 space in ship', () => {
    const board = Board();
    const ship = Ship(['A10','B10','C10','D10']);
    board.placeShip(ship);


    expect(board.boardContents).toStrictEqual([[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])
})

test('hit 10 space', () => {
    const board = Board();
    const ship = Ship(['A10','B10','C10','D10']);
    board.placeShip(ship);

    board.receiveAttack('A10');

    expect(board.boardContents).toStrictEqual([[0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]])

})

test('check if spot is it, it is', () => {
    const board1 = Board();
    const ship7 = Ship(['A1','B1','C1','D1']);
    board1.placeShip(ship7);


    expect(board1.receiveAttack('A1')).toBe(true);
})

test('check if spot is it, it is not', () => {
    const board1 = Board();
    const ship7 = Ship(['A1','B1','C1','D1']);
    board1.placeShip(ship7);


    expect(board1.receiveAttack('E1')).toBe(false);
})

test('check if sunk, not sunk', () => {
    const board1 = Board();
    const ship7 = Ship(['A1','B1','C1','D1']);
    board1.placeShip(ship7);


    expect(board1.allSunk()).toBe(false);
})

// test('check if sunk, sunk', () => {
//     const board1 = Board();
//     const ship7 = Ship(['A1','B1','C1','D1']);
//     board1.placeShip(ship7);

//     board1.receiveAttack('A1');
//     board1.receiveAttack('B1');
//     board1.receiveAttack('C1');
//     board1.receiveAttack('D1');


//     expect(board1.allSunk()).toBe(true);
// })

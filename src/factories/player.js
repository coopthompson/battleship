const Player = (player, opponent) => {

    let playerBoard = player

    let opponentBoard = opponent

    let possibleMoves = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10','B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10','C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10','D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10','E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10','F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10','G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10','H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10','I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10','J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10',];

    const converMove = (num) => {
        if ( num >= 100 ) {
            num -= 100;
        };
        let move = possibleMoves[num];
        return move
    }

    const makeMove = (move) => {

        if(opponentBoard.receiveAttack(move) === 'You already tried that spot!') {
            return 'You already tried that spot!'
        };

        opponentBoard.receiveAttack(move);

        if(opponentBoard.allSunk() === true) {
            return 'You win'
        };

    }

    const computerMove = () => {

        let randomMove = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];

        if(makeMove(randomMove) === 'You already tried that spot!') {
            makeMove(randomMove);
        }

        makeMove(randomMove);
    }

    return { playerBoard, opponentBoard, possibleMoves, makeMove, computerMove, converMove }
}

export default Player

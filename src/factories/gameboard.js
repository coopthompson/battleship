const Board = () => {
    let boardContents = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]
    
    const convertPlace = (array) => {
        if(array[0] === 'A') {
            array[0] = 0
        } else if (array[0] === 'B') {
            array[0] = 1
        } else if (array[0] === 'C') {
            array[0] = 2
        } else if (array[0] === 'D') {
            array[0] = 3
        } else if (array[0] === 'E') {
            array[0] = 4
        } else if (array[0] === 'F') {
            array[0] = 5
        } else if (array[0] === 'G') {
            array[0] = 6
        } else if (array[0] === 'H') {
            array[0] = 7
        } else if (array[0] === 'I') {
            array[0] = 8
        } else if (array[0] === 'J') {
            array[0] = 9
        } else {
            return 'Please enter a letter between A and J'
        }

        if(array[1] === '1') {
            array[1] = 0
        } else if (array[1] === '2') {
            array[1] = 1
        } else if (array[1] === '3') {
            array[1] = 2
        } else if (array[1] === '4') {
            array[1] = 3
        } else if (array[1] === '5') {
            array[1] = 4
        } else if (array[1] === '6') {
            array[1] = 5
        } else if (array[1] === '7') {
            array[1] = 6
        } else if (array[1] === '8') {
            array[1] = 7
        } else if (array[1] === '9') {
            array[1] = 8
        } else if (array[1] === '10') {
            array[1] = 9
        } else {
            return 'Please enter a number between 1 and 10'
        }    
        return array
    }

    const updateBoard = (array) => {
        boardContents[array[0]][array[1]] = 1
    }

    const placeShip = (Ship) => {
        let shipArray = Ship.returnArray();
        for (let i = 0; i < shipArray.length; i++ ) {
            let place = shipArray[i].split('')
            let coords = convertPlace(place);
            updateBoard(coords);
        }

    }

    return { boardContents, placeShip }
}

export default Board
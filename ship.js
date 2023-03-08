const Ship = (shipArray) =>  {
    const shipLength = shipArray.length;

    const hit = (indexNumber) => {
        if (indexNumber > shipLength) {return;}

        shipArray[indexNumber] = 'hit'
    }

    const returnArray = () => {
        return shipArray;
    }

    const isSunk = () => {
        let hits = 0;
        let sunk = false;
        for (let i = 0; i < shipLength; i++) {
            if (shipArray[i] === 'hit') {
                hits++;
            }
        }

        if (hits === shipLength) {
            sunk = true;
        }

        return sunk;
        
    }

    return { length: shipLength, hit, returnArray, isSunk}
}

const newShip = Ship(['hit', 'hit', 'hit', 'hit', 'E1'])

console.log(newShip.isSunk())


module.exports = Ship
import '../styling/window.css'

const New = () => {

    const makeBoard = (windowName, d = 0) => {

        for (let c = 0; c < 100; c++) {
            let cell = document.createElement("div");
            windowName.appendChild(cell).className = 'play';
            cell.setAttribute('id',`cell${c + d}`);
        }
    
    }

    const populate = (player) => {
        const playerData = player.playerBoard.boardContents

        const opData = player.opponentBoard.boardContents

        for (let i = 0; i < 10 ; i++ ) {
            for (let j = 0; j < 10 ; j++) {
                if (playerData[i][j] === 1) {
                    let target = document.querySelector(`#cell${(i * 10) + j}`)
                    target.classList.add('selected')
                }

            }

        }

        for (let i = 0; i < 10 ; i++ ) {
            for (let j = 0; j < 10 ; j++) {
                if (opData[i][j] === 1) {
                    let target = document.querySelector(`#cell${(i * 10) + j + 100}`)
                    target.classList.add('selected')
                }

            }

        }

    }

    const getId = (e) => {
        let id = e.target.id;
        let num = id.replace(/^\D+/g, '')
        return num;
    }

    return { makeBoard, populate, getId };
}

export default New;




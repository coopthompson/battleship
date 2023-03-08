import Ship from "../factories/ship";

it('only hit parts of the array', () => {
    const ship1 = Ship(['A1','B1','C1','D1'])
    ship1.hit(5);
    expect(ship1.returnArray()).toStrictEqual(['A1','B1','C1','D1'])
})

it('ship is hit', () => {
    const ship2 = Ship(['A1','B1','C1','D1'])
    ship2.hit(1);
    expect(ship2.returnArray()).toStrictEqual(['A1','hit','C1','D1'])
})

it('ship is hit many times', () => {
    const ship3 = Ship(['A1','B1','C1','D1'])
    ship3.hit(0);
    ship3.hit(1);
    ship3.hit(2);
    ship3.hit(3);
    expect(ship3.returnArray()).toStrictEqual(['hit','hit','hit','hit'])
})

it('ship is not sunk (1)', () => {
    const ship4 = Ship(['A1','B1','C1','D1'])
    
    expect(ship4.isSunk()).toBe(false)
})

it('ship is not sunk (2)', () => {
    const ship5 = Ship(['A1','B1','C1','D1'])

    ship5.hit(0);
    ship5.hit(2);

    expect(ship5.isSunk()).toBe(false)
})

it('ship is sunk', () => {
    const ship6 = Ship(['A1','B1','C1','D1'])

    ship6.hit(0);
    ship6.hit(1);
    ship6.hit(2);
    ship6.hit(3);

    expect(ship6.isSunk()).toBe(true)
})


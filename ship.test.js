const Ship = require('./ship')

it('return the ship length', () => {
    expect(Ship(5)).toStrictEqual({ length: 5 })
})
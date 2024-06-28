const {sum,multipiy,divide} = require('./math')

test('Adds 1 +2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
}) 

test('multiplies 2*3 to equal 6', () => {
    expect(multipiy(2,3)).toBe(3);
}) 

test('divide 6 / 2 to equal 3', () => {
    expect(divide(6,2)).toBe(3);
}) 

test('divide by zero throws error', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero')
}) 
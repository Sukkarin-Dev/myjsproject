function sum(a, b) {
    return a + b;
}

function multipiy(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by')
    }
    return a/b;
}

module.exports = {sum,multipiy,divide}


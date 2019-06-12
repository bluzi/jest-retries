const test = require('./src/retry');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

test('Random value should eventually resolve to 1', 100, () => {
    expect(getRandomInt(0, 2)).toBe(1);
});
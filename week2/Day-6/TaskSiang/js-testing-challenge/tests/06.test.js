const repeatString = require('../src/06');

test('Repeat Makan! 3 x to equal Makan! Makan! Makan!', () => {
    expect(repeatString('Makan! ', 3)).toBe('Makan! Makan! Makan! ');
});
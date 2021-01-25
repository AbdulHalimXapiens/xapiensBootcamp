const repeatLetter = require('../src/07');

test('Repeat letter, He he 2x to HHee hhee', () => {
    expect(repeatLetter('Hello World', 2)).toBe('HHeelllloo WWoorrlldd');
});
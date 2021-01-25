const mebiToKibi = require('../src/03');

test('multiply 1 * 1024 to equal 1024', () => {
    expect(mebiToKibi(1)).toBe(1024);
});
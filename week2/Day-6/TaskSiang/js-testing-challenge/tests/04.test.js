const isLeapYear = require('../src/04');

test('Check 2020 is a true leap year', () => {
    expect(isLeapYear(2020)).toBe(true);
});
const isPrime = require('../src/05');

test('Check number is a true primes', () => {
    expect(isPrime(5)).toBe(true);
});
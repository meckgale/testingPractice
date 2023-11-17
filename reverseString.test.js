const reverseString = require('./reverseString');

test('take a string and return it reversed', () => {
    expect(reverseString('jason')).toBe('nosaj');
});
const caesarCipher = require('./caesarCipher');

test('A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”', () => {
    expect(caesarCipher('kane', 13)).toBe('xnar');
});
test(' wrapping from z to a', () => {
    expect(caesarCipher('kane', 29)).toBe('ndqh');
});
test('keeping the same case', () => {
    expect(caesarCipher('kaanee', 25)).toBe('jzzmdd');
});
test('punctuation!', () => {
    expect(caesarCipher('kaneee!!!', 13)).toBe('xnarrr!!!');
})
function caesarCipher(string, shift) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr = Array(string.length);
    for(let i = 0; i < string.length; i++) {
        const letterRegex = /^[A-Za-z]$/;
        let letter = string.charAt(i);
        if(letter.match(letterRegex) !== null) {
            let index = alphabet.indexOf(letter) + shift;
            if(index > 25) {
                arr[i] = alphabet[index - 26];
            } else {
                arr[i] = alphabet[index];
            }
        } else {
            arr[i] = letter;
        }
    }
    return arr.join('');
}
// You may wat to add upper case functinalitiy later on.

module.exports = caesarCipher;

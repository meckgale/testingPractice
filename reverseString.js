function reverseString(input) {
    let arr = Array(input.length);
    for(let i = input.length - 1, j = 0; i > 0, j < input.length; i--, j++) {
        arr[j] = input.charAt(i);
    }
    return arr.join('');
}

module.exports = reverseString;
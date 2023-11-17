function capitalize(input) {
    let capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
    return capitalizedInput;
}

module.exports = capitalize;
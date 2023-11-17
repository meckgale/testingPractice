function analyzeArray(array) {
    let object = {};
    object.average = array.reduce((prev, cur) => prev + cur, 0) / array.length;
    object.min = Math.min(...array);
    object.max = Math.max(...array);
    object.length = array.length;

    // return object;
    return object;
}

module.exports = analyzeArray;

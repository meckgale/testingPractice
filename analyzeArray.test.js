const analyzeArray = require('./analyzeArray');

test('An analyzeArray function that takes an array of numbers and returns an object with the following properties: average', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test('An analyzeArray function that takes an array of numbers and returns an object with the following properties: min', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test('An analyzeArray function that takes an array of numbers and returns an object with the following properties: max', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test('An analyzeArray function that takes an array of numbers and returns an object with the following properties: length', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});
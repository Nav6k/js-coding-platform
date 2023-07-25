let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '+'];
let smallalphabets = 'abcdefghijklmnopqrstuvwxyz';
let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let desiredLength = parseInt(prompt('Enter the desired length of the output string:'));
let includeNumbers = confirm('Include numbers in the random string?');
let includeSymbols = confirm('Include symbols in the random string?');
let includeAlphabets = confirm('Include alphabets in the random string?');
let includesmallalphabets =  confirm('Include small alphabets in the random string?');
let validTypes = [];

if (includeNumbers) {
    validTypes.push(0);
}

if (includeSymbols) {
    validTypes.push(1);
}

if (includeAlphabets) {
    validTypes.push(2);
}

if (includesmallalphabets) {
    validTypes.push(3);
}

let res = '';

function getRandomElementFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

while (res.length < desiredLength) {
    let randomType = validTypes[Math.floor(Math.random() * validTypes.length)];
    switch (randomType) {
        case 0:
            res += getRandomElementFromArray(numbers);
            break;
        case 1:
            res += getRandomElementFromArray(symbols);
            break;
        case 2:
            res += getRandomElementFromArray(alphabets);
            break;
        case 3:
                res += getRandomElementFromArray(smallalphabets);
                break;
    }
}

console.log(res);

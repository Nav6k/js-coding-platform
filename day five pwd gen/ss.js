let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '+'];
let smallalphabets = 'abcdefghijklmnopqrstuvwxyz';
let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let desiredLength = 6; 
let res = '';

function getRandomElementFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

while (res.length < desiredLength) {
    let randomType = Math.floor(Math.random() * 4); 
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
    }
}

console.log(res);

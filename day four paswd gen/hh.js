let string = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let i = 0;
let desiredLength = 8; // Change this value to the desired length of the output string
let res = '';

while (i < desiredLength && i < string.length) {
    res += string[i] + '';
    i++;
}

console.log(res);

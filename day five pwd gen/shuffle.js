function shuffleString(str){
    let shuffledStr = '';
    while(str.length>0){
        const randomIndex= Math.floor(Math.random() * str.length);
        shuffledStr += str[randomIndex];
        str =str.slice(0, randomIndex) +str.slice(randomIndex+1);

    }
    return shuffledStr;
}

let orignalString ="hello";
let shuffledString = shuffleString(orignalString);
console.log(shuffledString);
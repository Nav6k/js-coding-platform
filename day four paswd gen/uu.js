let c =['!','@','#','$','%','^','&','*','(',')'];
let i=0;
let desiredLength =4;
let res ='';
while (i < desiredLength && i < c.length) {
    res += c[i] ;
    i++;
}

console.log(res);

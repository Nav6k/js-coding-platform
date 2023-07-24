let c =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let i=0;
let desiredLength =4;
let res ='';
while (i < desiredLength && i < c.length) {
    res += c[i] ;
    i++;
}

console.log(res);

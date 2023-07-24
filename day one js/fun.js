function onePlusAverage(x,y){
    console.log("done");
    return Math.round(1+(x+y)/2);

}

const sum =(p,q)=>{
 return p+q;
}

const hello =()=>{
    console.log("hello");
    return "hi";
}
let a=1;
let b =2;
let c=3;
let v= hello();
console.log(v);
console.log(sum(1,9));
console.log("average of and b "+onePlusAverage(a,b));
console.log("average of and b "+onePlusAverage(b,c));
console.log("average of and b "+onePlusAverage(a,c));

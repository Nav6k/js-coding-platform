let num =[1,2,3,44,56];
let b =num.toString()
console.log(b, typeof b)//op= 1,2,3,44,56 string
let c = num.join(" and ")
console.log(c, typeof c)//1 and 2 and 3 and 44 and 56 string
let r = num.pop()
console.log(num,r)//op= [1,2,3,44]56
let p = num.push(77)
console.log(num,p)//op= [1,2,3,44,77]5
let s = num.shift()
console.log(s,num);//op=1[2,3,44,56]
let u = num.unshift(75)
console.log(u,num)////op= 6[75,2,3,44,56]
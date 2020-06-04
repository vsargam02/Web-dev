 //it is obejct inherit
 // do not have class oriented 
 //we directly inherit the objects

let a = {p:10 , q:'sharan', r:false}

let b = Object.create(a)
let c = Object.create(b)

console.log(a)
console.log(b)
console.log(b.q)
console.log(c.q)
b.q='cdcdw'
console.log(b)
console.log(c.q)


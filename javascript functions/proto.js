
let a = {p:10 , q:'sharan', r:false}

let b = Object.create(a)
let c = Object.create(b)


b.__proto__
//object{p:10,q:'cckvsd',r:true}

c.__proto__
//Object{}

c.__proto__,__proto__
//object{p:10,q:'cckvsd',r:true}

//to check equality
b.__proto__ ==a
// true


c.__proto__ == a
//false

c.__proto__.__proto__ ==b
//false

c.__proto__.__proto__ == a
//true

a.isPrototypeOf(b)
//true

a.isPrototypeOf(c) // (indireclty) its shows multiple inheritance
//true
 
let d = { k:10}

a.isPrototypeOf(d)
//false

//chnage the data
b.__proto__.p++
//11

let x = ' dvvfrfcfcfwefw'

String{""}
x.__proto__ == String.isPrototype
//true

(true).__proto__ == Boolean.prototype
//true

(10).__proto__ == Number.prototype
//true

d.__proto__ == Object.prototype
//true

let a = {x:10}
 
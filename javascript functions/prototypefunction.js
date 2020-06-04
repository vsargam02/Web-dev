function Person(name,age){
	this.name = name
	this.age = age
}
Person.prototype.isAdult = function(){ return this.age >= 18}

let p = new Person('harry potter' , 15)
let p2 = new Person('john doe' , 30)

console.log(p.isAdult())
console.log(p2.isAdult())
console.log(p.isAdult = p2.isAdult)
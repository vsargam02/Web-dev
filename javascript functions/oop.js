// console.log('hello');

// let obj = {
// 	name : ' harry',
// 	channel : ' you tube',
// 	address : 'mars'
//  }
//  console.log(obj)

//  function Obj(givenName){
//  	this.name = givenName
//  }

//  Obj.prototype.getName = function(){
//  	return this.name;
//  }


// Obj.prototype.setName = function(newName){
// 	this.name= newName;
// }

// let obj2 = new Obj('rohsn das');
// console.log(obj2);

//inheritence

// employee costructor
function Employee(name,salary,experience){
	this.name= name;
	this.salary = salary;
	this.experience = experience;
}

Employee.prototype.slogan = function(){
	return 'this company is the best. regards, ${this.name}';

}
// this create harry object
let harry  = new Employee('harry',250000,87);
console.log(harry.slogan())

function programmar(name,salary,experience,language){
	Employee.call(this,name,salary,experience);
	this.language = language;

}

// inherit the prototype
programmar.prototype = Object.create(Employee.prototype)

let rohan = new programmar('tohan' , 2,0,"javascript");
console.log(rohan);
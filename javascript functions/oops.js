
// ovject literal for creating objects
let car = {
	name: 'maruti',
	topSpeed:89,
	run: function(){
		console.log('car is running');
	}
}
 car.run()
 

//constructor
// it is a template by which we can create object
function GenralCar(givenName, givenSpeed){
	this.name = givenName;
	this.topSpeed = givenSpeed;
	this.run = function(){
		console.log('${this.name} is running');
	}
}
car1 = new GeneralCar('nissan',180);
 console.log(car1);
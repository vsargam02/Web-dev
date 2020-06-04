class Employee{
	constructor(givenName,givenExperience,givenDivision){
		this.name = givenName;
		this.experience = givenExperience;
		this.division = givenDivision;

	}
	slogon(){
		return `i am ${this.name} and this company is the best`;
	}
	joining(){
		return 2020 - this.experience;

	}
	static add(a,b){
		return a+b;
	}
}


class Programmmer extends Employee{
	constructor(givenName,givenExperience,givenDivision,language,github){
		super(givenName,givenExperience,givenDivision)  //consteructor of previous class
		this.language = language;
		this.github = github;
	}
	 favouritelanguage(){
		if(this.language == 'python'){
			return 'python';
		}
		else{
			return ' javascript'
		}
	}
	static multiply(a,b){
		return a *b;
	}
}

// harry = new Employee("harry",20,"division");
// console.log(harry.joining());
// console.log(Employee.add(34,6));

rohan = new Programmmer('rohan',3,'lays','go','rohan42')
console.log(rohan)
console.log(rohan.favouritelanguage())
console.log(Programmmer.multiply(4,5))

// class Bike
// {
//   constructor()
//   {
//     this.company="Honda";
//   }
// }
// class Vehicle extends Bike {
//   constructor(name,price) {
//    super();
//     this.name=name;
//     this.price=price;
//   } 
// }
// var v = new Vehicle("Shine","70000");
// console.log(v.company+" "+v.name+" "+v.price);
// console.log(v.company+" "+v.name+" "+v.price);
// function sayHello(){
// 	console.log("hello")

// }
// console.log("And the wait starts . . . .");
// setTimeout(sayHello,1000);
// setTimeout(sayHello,2000);

var intervalId;
var runCount = 0;
function sayHello(){
	runCount++;
	if(runCount >5){
		clearInterval(intervalId)
	}
	console.log('hello')
}
console.log("And the wait starts . . . . ");
intervalId = setInterval(sayHello,1000)


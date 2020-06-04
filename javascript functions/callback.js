// function show(a){
// 	console.log("i am show function " + a);
// }
// function geeeky(a,callback){
	
// 	callback(a);
// }
// geeeky(101,show);

// function show(){
// 	console.log("i am show function");
// }
// function geeeky(callback){
// 	callback();
// }
// geeeky(show);

// function geeky(callback){
// 	var a=101;
// 	callback(a);
// }
// geeky(function show(a){
// 	console.log('i am show function' +a);
// })

// function geeky(callback){
// 	var a = 101;
// 	callback(a);
// }
// geeky(a=>console.log("i am show function"+a));

//Synchronous
// function show(){
// 	console.log("i am show function");
// }
// function geeky(callback){
// 	callback();
// }
// geeky(show);
// console.log("end");


//Asynchronous
setTimeout(function show(){
	console.log("i am show function");

},2000);
console.log("end");
 
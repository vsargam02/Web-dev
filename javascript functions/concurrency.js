function helloSlayer(times,name){
	let count=0
	let loopId = setInterval(()=>{
		count++
		console.log('hello '+ name)
		if(count===times){
			clearInterval(loopId)
		}
		while(true){
			// but if we start a infinte loop then other it  cannot execute its full function 
// is only give one time like it gives only 'hello arnav' only one time
// remove the while loop then its execute its function properly
		}
	},100)
}

helloSlayer(3,'arnav')       // it works concurrently
helloSlayer(2,'prateek')


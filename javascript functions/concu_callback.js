// to remove the concurrency we use callback functions
function helloSlayer(times,name,doneSaying){
	let count=0
	let loopId = setInterval(()=>{
		count++
		console.log('hello '+ name)
		if(count===times){
			clearInterval(loopId)
			doneSaying()
		}
		
	},100)
}

helloSlayer(3,'arnav', ()=>{
	helloSlayer(2,'prateek',()=>{
		helloSlayer(3,'rishab',()=>{

		})
	})
})       // it works concurrently



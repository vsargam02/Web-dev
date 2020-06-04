function download(url) {
	return new Promise((resolve,reject)=>{
		console.log('downloading from ${url}')
	if (!url.startsWith('http')){
		return reject(new Error('URL must start with http'))
	}
	setTimeout(() => {
		let
		 savedFile = url.split('/').pop()
		console.log('download and saved as ${savedFile}')
		resolve(savedFile)
	},700)
 	})
	
}

function compress(file,format){
	return new Promise((resolve,reject)=>{
		console.log('compressing ${file}')
	if (['zip','gzip','7z'].indexOf(format)=== -1){
		return reject(new Error('we only support zip,gzip and 7z'))
	}
	setTimeout(()=>{
		let archive = file.split('.')[0] + '.' + format
		console.log('compressed and saved as ${archive}')
		resolve(archive)
	}, 600)
	})
	
}

function upload(server,file) {
	return new Promise((resolve,reject) =>{
		console.log('Uploading ${file} to ${server}')
	if (!server.startsWith('ftp://')){
		return reject(new Error('we can only upload FTP servers'))
	}
	setTimeout(() => {
		let remotepath = '${server}/${file}'
		console.log('uploaded to ${remotepath}')
		resolve(remotepath)
	},500)

	})
	
}

//async await hell

async function task1(){
	const file1 = await download('http://site.com/path/image1.jpg')
	const archive1 = await compress(file1,'zip')
	await upload('ftp://files.com',archive1)

}
async function task2(){
	const file2 = await download('http://site.com/path/image2.jpg')
	const archive2 = await compress(file2,'zip')
	await upload('ftp://files.com',archive2)

}
async function task3(){
	const file3 = await download('http://site.com/path/image3.jpg')
	const archive3 = await compress(file3,'zip')
	await upload('ftp://files.com',archive3)

}
// async function task(){
// 	const start = new Date().getTime()
// 	const completed1 = task1()
// 	const completed2 = task2()
// 	const completed3 = task3()

// 	await completed1
// 	await completed2
// 	await completed3
	
// 	console.log((new Date().getTime() - start)/1000)
// }

// task()


// OR WITH PROMISE ALL SYNTAX
Promise.all([
	task1(),
	task2(),
	task3()
]).then(()=> console.log('all the task are done'))
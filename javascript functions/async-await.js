// special keyword await it actually runs promise based function and instead of having 
//  or  call then or catch on it function it actually waits for it to end 


function download(url) {
	return new Promise((resolve,reject)=>{
		console.log(`downloading from ${url}`)
	if (!url.startsWith('http')){
		return reject(new Error(`URL must start with http`))
	}
	setTimeout(() => {
		let
		 savedFile = url.split('/').pop()
		console.log(`download and saved as ${savedFile}`)
		resolve(savedFile)
	},3000)
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
		console.log(`compressed and saved as ${archive}`)
		resolve(archive)
	}, 2000)
	})
	
}

function upload(server,file) {
	return new Promise((resolve,reject) =>{
		console.log(`Uploading ${file} to ${server}`)
	if (!server.startsWith('ftp://')){
		return reject(new Error('we can only upload FTP servers'))
	}
	setTimeout(() => {
		let remotepath = '${server}/${file}'
		console.log('uploaded to ${remotepath}')
		resolve(remotepath)
	},1000)

	})
	
}

// download('http://somesite.com/path/image.jpg')
// 	.then((file)=>compress(file,'zip'))           //return the value directly by arraow
// 	.catch((err)=> console.error('eror downloadding the file'))
// 	.then((archive)=>upload('ftp://files.com',archive))
// 	.catch((err)=>console.log('errpr compressing thr file'))

async function task(){
	try{
		const file = await download('http://somesite.com/path/image.jpg')
		const archive = await compress(file,'zip')
		await upload('ftp://files.com',archive)
		}catch(err){
			console.warn('there was some error')
		}
}

console.log('tast started')
task().then(()=>console.log('task actually ended'))
console.log('task ended')// not actually ended
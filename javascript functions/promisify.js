//take the callback function and convert dirctly into promises using promisify
const util = require('util')

function download(url,downloaded){
	console.log('downloading from ${url}')
	if (!url.startsWith('http')){
		return downloaded(new Error('URL must start with http'))
	}
	setTimeout(() => {
		let savedFile = url.split('/').pop()
		console.log('download and saved as ${savedFile}')
		downloaded(null,savedFile)
	},3000)
}

function compress(file,format,compressed){
	console.log('compressing ${file}')
	if (['zip','gzip','7z'].indexOf(format)=== -1){
		return compressed(new Error('we only support zip,gzip and 7z'))
	}
	setTimeout(()=>{
		let archive = file.split('.')[0] + '.' + format
		console.log('compressed and saved as ${archive}')
		compressed(null,archive)
	}, 2000)
}

function upload(server,file,uploaded){
	console.log('Uploading ${file} to ${server}')
	if (!server.startsWith('ftp://')){
		return uploaded(new Error('we can only upload FTP servers'))
	}
	setTimeout(()=>{
		let remotepath = '${server}/${file}'
		console.log('uploadded to ${remotepath}')
		uploaded(null,remotepath)
	},1000)
}

const downloadPromise = util.promisify(download)
const compressPromise = util.promisify(compress)
const uploadPromises = util.promisify(upload)

download('http://somesite.com/path/image.jpg')
	.then((file)=>compress(file,'zip'))           //return the value directly by arraow
	.catch((err)=> console.error('eror downloadding the file'))
	.then((archive)=>upload('ftp://files.com',archive))
	.catch((err)=>console.log('errpr compressing thr file'))


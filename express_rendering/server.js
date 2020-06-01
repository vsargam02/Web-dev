const express = require('express')
const todoRoute = require('./routes/todos')

const srv = express();

srv.set('view engine','hbs')
srv.set('views',__dirname + '/views')		 				//used to set certain data
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))        
													//means my server uses hbs as a view engine
													//it tells inside which folder we look for views		
													//view engine: is a library that helps render files
srv.use('/todos',todoRoute)

srv.listen(3456)

   
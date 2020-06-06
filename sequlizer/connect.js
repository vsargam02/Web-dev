const Seqeulize = require('sequelize')
                        //database,username,password
const db = new Seqeulize('sampledb1', 'sampleuser1','sampleuser1',{
    host:'localhost',
    dialect:'mysql',

})

db.authenticate()
    .then(()=>console.log('connection worked'))
    .catch((err)=>console.error(err))
    
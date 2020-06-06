const {db,Student} = require('./model')

const task = async()=>{
    try{

        await db.sync()

        const students = await Student.findAll({
            where : {age:{$gt :15}},
            order :[
                ['age','DESC'],
                ['name','ASC']
            ]
        })
        students.forEach(s => console.log(`
        age: ${s.dataValues.age} \t name: ${s.dataValues.name}
        `))
           
        
           
    } catch(e){
        console.error(e)
    }
}

task();
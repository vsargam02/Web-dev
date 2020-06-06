const {db, Student} = require('./model')

const task = async() =>{
    try{

        await db.sync({alter:true})

        //insert a student
        for(let i =0; i<30; i++){
            await Student.create({
                name:(['tom','dick','harry','Ram','Shyam','Neha','Sally','Rema','Thomas',
                    'Sally'])[parseInt(Math.random()*10)],
                age: 10+ parseInt(Math.random()*10)
        })
    }
       
        

    } catch(e){
        console.error(e)
    }
}

task();


// const {DataTypes} = require('sequelize')
// const {db} = require('./connection')
const seqeulize = require('sequelize')
                        //database,username,password
const DataTypes = seqeulize.DataTypes
const db = new seqeulize('sampledb1', 'sampleuser1','sampleuser1',{
    host:'localhost',
    dialect:'mysql',

})

// db.authenticate()
//     .then(()=>console.log('connection worked'))
//     .catch((err)=>console.error(err))
    
//     module.exports = db;

const course = db.define('course',{
    id:{
        type: DataTypes.STRING(2),
        primaryKey :true
    },
    name: DataTypes.STRING(20)
})

const teacher = db.define('teacher',{
    name: {
        type: DataTypes.STRING(35),
        allowNull : false
    }
})

const center = db.define('center',{
    id:{
        type: DataTypes.STRING(2),
        primaryKey :true
    },
    name: {
        type: DataTypes.STRING(35),
        allowNull : false
    },
    city: {
        type: DataTypes.STRING(35),
        allowNull : false
    },

})
const season = db.define('season',{
    id:{
        type:DataTypes.STRING(1),
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING(10),
        allowNull:false
    },
})

const Batch = db.define('batch',{
    code:{
        type:DataTypes.STRING(8),
        primaryKey:true
    },
    year: DataTypes.INTEGER(4),
    start: DataTypes.DATE,
    end:DataTypes.DATE
})

//ASSOCIATION

Batch.belongsTo(course)
Batch.belongsTo(center)
Batch.belongsTo(season)

course.hasMany(Batch)
center.hasMany(Batch)
season.hasMany(Batch)

db.sync()

module.exports={
    db,
    Batch,
    teacher,
    season,
    course,
    center
}
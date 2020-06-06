const Seqeulize = require('sequelize')
const Datatypes = Seqeulize.DataTypes

                        //database,username,password
const db = new Seqeulize('sampledb1', 'sampleuser1','sampleuser1',{
    host:'localhost',
    dialect:'mysql',

})
//create model call student first pass which used as a table
const Student = db.define('student',{
    //deffine columns
    name:{
        type: Datatypes.STRING(40),
         allowNull: false
    },
    age:{
        type: Datatypes.INTEGER(2),
        allowNull: false,
        defaultValue: -1
    },
});

module.exports ={
    db,Student
}
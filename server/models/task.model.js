module.exports = (sequelize,Sequelize)=>{

const Task = sequelize.define('task',{
    title:{
        type : Sequelize.STRING,
        allowNull:false,
    },
    imagePath :{
        type:Sequelize.STRING,
        allowNull:false,
    }

})

return Task;
};
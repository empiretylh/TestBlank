
module.exports = (sequelize,Sequelize,Task)=>{

    const Step = sequelize.define('step',{
        title:{
            type : Sequelize.STRING,
            allowNull:false,
        },
        imagePath :{
            type: Sequelize.STRING        
        }

    });

    Task.hasMany(Step,{as:'steps',foreginKey:'taskId'});
    Step.belongsTo(Task,{as:'task',foreginKey:'taskId'});

    return Step;
}


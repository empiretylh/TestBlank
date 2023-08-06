module.exports = (sequelize,Sequelize,Task,User)=>{

    const userTask = sequelize.define('userTask',{
        isFinished : {
            type : Sequelize.BOOLEAN,
            
        },
        description : {
            type:Sequelize.STRING,
        }
    
    })

        
    // // Associations
    userTask.belongsTo(Task, { foreignKey: 'taskId' });
    Task.hasMany(userTask, { as : 'tasks', foreignKey: 'taskId' });

   userTask.belongsTo(User, { as: 'user', foreignKey: 'userId' });
   User.hasMany(userTask, { as: 'userTasks', foreignKey: 'userId' });

    return userTask;
    };
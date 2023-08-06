module.exports = (sequelize,Sequelize)=>{

    const User = sequelize.define('user',{
        name:{
            type : Sequelize.STRING,
            allowNull:false,
        },
        profileimage :{
            type:Sequelize.STRING,
            allowNull:false,
        }
    
    })
    
    return User;
    };
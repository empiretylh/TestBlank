const db = require('../models')
const UserDB = db.User;
const userTask = db.UserTask;
const Op = db.Sequelize.Op;

//usertask/
exports.create = async (req,res)=>{
    try{
    
    const {isFinished,description,userid, taskid} = req.body;

    await db.sequelize.sync();


    console.log(req.body);
    const Users = await userTask.create({
        userId:userid,
        taskId:taskid,
        description:description,
        isFinished:isFinished?isFinished : false
    })
    

    return res.status(201).json(Users);
    }catch(error){
        console.error(error);
        return res.status(500).json({error:"Internal server error"})
    }   
}
//usertask/ //Reterive All
exports.getAll = async(req,res)=>{
    try{
        const {userid} =   req.body;
        
    
        await db.sequelize.sync();
    
        // let user = await UserDB.findByPk(userid);

        const tasks = await userTask.findAll({
          include: {model : db.Task },
          where:{
            userId : userid
          }  
        })

        return res.status(200).json(tasks)
    
        
    }catch(err){
        console.error(err)
        res.status(500).json({error:'Internal Server Error'})
    }
}

//user/:id
exports.getone = async(req,res) =>{
    try{
        const {id}  = req.params;
      
        const user = await User.findByPk(id)

        return res.status(200).json(user)
    
        
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal Server Error'})
    }
}
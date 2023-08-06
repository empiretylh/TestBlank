const db = require('../models')
const User = db.User;
const Op = db.Sequelize.Op;

//taskid
exports.create = async (req,res)=>{
    try{
    const {name} = req.body;

    await db.sequelize.sync();

    const filePath = `${req.file.destination}/${req.file.filename}`

    const Users = await User.create({name:name,profileimage:filePath});
    

    return res.status(201).json(Users);
    }catch(error){
        console.error(error);
        return res.status(500).json({error:"Internal server error"})
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
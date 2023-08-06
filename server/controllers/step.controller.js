const db = require('../models')
const Step = db.Step;
const Task = db.Task;
const Op = db.Sequelize.Op;

//taskid
exports.create = async (req,res)=>{
    try{
    const {taskid} = req.params;
    const {title} = req.body;
    
    const task = await Task.findByPk(taskid);

    if(!task){
        return res.status(404).json({error:"Task not found"});
    }

    console.log(title)
    const filePath = `${req.file.destination}/${req.file.filename}`


    const step = await Step.create({title:title,imagePath:filePath,taskId:taskid});

    return res.status(201).json(step);
    }catch(error){
        console.error(error);
        return res.status(500).json({error:"Internal server error"})
    }


   
}
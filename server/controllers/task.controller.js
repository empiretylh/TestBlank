const db = require('../models')
const Task = db.Task;
const Op = db.Sequelize.Op;
const basedir = require('../basedir').__dirname;


exports.create = async(req,res)=>{

    // if(!req.body.title){
    //     res.status(400).send({
    //         message:"content can not be empty"
    //     })
    //     return;
   
    // }
    // console.log(req)
    console.log("Request BOdy " , req.body)
     await db.sequelize.sync();

    const {title} = req.body;
    console.log(title)
    console.log(req.file)

    const filePath = `${req.file.destination}/${req.file.filename}`

    const task = {
        title:title,
        imagePath:filePath    
    
    }

    console.log(filePath);
    Task.create({title:title,imagePath:filePath}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            message:err.mesage || "Some error occured"
        });
    })
    
   
}

exports.get = async (req,res)=>{
    try{
        const tasks = await Task.findAll({
            include: {model : db.Step, as :'steps'}
        });
        
        console.log(tasks)
        return res.status(200).json(tasks);
    }catch(error){
        console.error(  error);
        return res.status(500).json({error:'Internal server error'})
    }
}
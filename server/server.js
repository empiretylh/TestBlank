const express = require('express')
const cors = require('cors')
const formidable = require('express-formidable')
var multer = require('multer')
var upload = multer();
const app = express();
var corsOptions = {
    origin:'http://localhost:8081'
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded());

app.use('/uploads',express.static('./uploads'))


const db = require('./models');

db.sequelize.sync({force:false}).then(()=>{
    console.log("Synced db.");
}).catch((err)=>{
    console.log("Failed to sync db: " + err.message)
})


app.get('/',(req,res)=>{
 
    res.send({message:"welecome to EMPIRE....."});
})

require('./routes/routes')(app);

const PORT = process.env.PORT ||  8080;

app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})
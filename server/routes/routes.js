const multer = require('multer')

module.exports = app =>{
const basedir =  require('../basedir').__dirname;


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage }).single('image');
  


    const task = require('../controllers/task.controller');
    const step = require('../controllers/step.controller')
    const user = require('../controllers/ user.controller')
    const usertask = require('../controllers/usertask.controller');
 
    var Router = require('express').Router();
      Router.post("/",upload,task.create);
      Router.post("/:taskid",step.create);
      Router.get("/",task.get);
    
      app.use('/api/task',Router)

    var userRouter =  require('express').Router();
      userRouter.post('/',upload,user.create);
      userRouter.get('/:id',user.getone);

      app.use('/api/user',userRouter);

    var userTaskRouter = require('express').Router();
      userTaskRouter.post('/',usertask.create);
      userTaskRouter.get('/', usertask.getAll);

      app.use('/api/usertask',userTaskRouter);
}
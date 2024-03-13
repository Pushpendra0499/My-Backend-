// import the todo
 const Todo = require("../models/Todo");

 // define rout hander

 exports.createTodo = async(req,res) => {
    try{
      // extract title and description frome request body
       const  {title,description} =req.body;
    //    create a new todo insert in DB
    const response = await Todo.create({title,description});
    //  send a json response with a success flag
    res.status(200).json(
        {
            success:true,
            data:response,
            message:'Entery Created Successfully'
        }
    );

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            })
         

    }
 }
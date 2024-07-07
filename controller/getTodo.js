// Importing the body

const Todo = require("../models/Todo")

exports.getTodo = async(req,res) =>{
    try{

        // To fetch all Todo items from database
        
        // Using the inbuilt fucntions of mongoose
        const todos = await Todo.find({});

        // Response 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Data fetched succesfully"
        })


    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server error"


        });

    }
}


exports.getTodoById = async(req,res)=>{
  
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id : id})

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Data not found for given id"
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo data id : ${id} fetched successfully`
        })

    }
    catch(err){

        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server error"


        });

    }

}




const Todo = require("../models/Todo")

// Handling Router
exports.createTodo = async(request,response)=>{
    try{

        // Request for data
        const{title,description} = request.body

        // Sending data to database
        const todo = await Todo.create({title,description})

        response.status(200).json(
            {
                success:true,
                data:todo,
                message:"Entry created successfully"
            }
        );

    }
    catch(error){
        console.error(error);
        response.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:error.message
        })
    
         
    }
}
const Todo = require("../models/Todo")

// Handling Router
exports.updateTodo = async(request,response)=>{
    try{
        const{id} = request.params;
        const{title,description} = request.body

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},

        )
        response.status(200).json({
            success:true,
            data:todo,
            message:"Updated successfully"

        })

       


    }
    catch(error){
        console.error(error);
        response.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Server error"


        });

    }
    }
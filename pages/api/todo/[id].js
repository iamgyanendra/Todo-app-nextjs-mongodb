import dbConnect from "../../../utils/dbConnect";
import Todo from "../../../models/todo";

dbConnect();

export default async (req, res)=>{
    const {query:{id}, method}=req;

    switch (method){
        case 'GET':
            try {
                const todo = await Todo.findById(id);
                if(!todo){
                    return res.status(400).json({success: false})
                }

                res.status(200).json({success:true, data: todo});
            } catch (error) {
                console.log(error);
            }
            break;
        case 'PUT':
            try {
                const todo = await Todo.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators:true
                });
                if(!todo){
                    return res.status(400).json({success:false});
                }

                res.status(200).json({success:true, data: todo});
            } catch (error) {
                console.log(error);
            }
            break;
        case 'DELETE':
            try {
                const deleteTodo = await Todo.deleteOne({_id: id});

                if(!deleteTodo){
                    return res.status(400).json({success:false});
                }

                res.status(200).json({success:true, data: {}});
            } catch (error) {
                console.log(error);
            }
            break;
        default:
            res.status(400).json({success:false});
            break;
    }
}
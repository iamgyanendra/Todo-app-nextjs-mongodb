import dbConnect from "../../../utils/dbConnect";
import Todo from "../../../models/todo";

dbConnect();

export default async (req, res)=>{
    const {method} = req;

    switch (method){
        case 'GET':
            try {
                const notes = await Todo.find({});
                res.status(200).json({success:true, data: notes})
            } catch (error) {
                res.status(400).json({success:false})
            }
            break;
        case 'POST':
            try {
                const note = await Todo.create(req.body);
                res.status(201).json({success:true, note})
            } catch (error) {
                res.status(400).json({success:false});
            }
            break;
        default:
            res.status(400).json({success:false});
            break;
    }
}
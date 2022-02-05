const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title:{
        type: String,
        require:[true, 'Please Add Title'],
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description:{
        type: String,
        require:[true, 'Please Add Description'],
        maxlength: [400, 'Description cannot be more than 400 characters']
    },  
});

module.exports = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)
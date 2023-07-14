const mongoose = require('mongoose');
const messageSchema = mongoose.Schema({
    text: {
        type:String,
        required:false
    }
//
});

const Message = mongoose.model('Message',messageSchema)
module.exports = Message
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    equipment:{
        type:String,
        required:true
    },
    remark:{
        type:String,
        required:true
    },
    // other:{
    //     type:String,
    //     required:true
    // },
    date: { 
        type: Date, 
        default: Date.now 
    },
})
const Breakdow = mongoose.model('Breakdow', UserSchema);
module.exports = Breakdow;
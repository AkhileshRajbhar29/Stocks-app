const mongoose = require ("mongoose");

const UsersSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },},
    {
        timestamps:true
    }
);

exports.UsersModel = mongoose.model("UsersModel", UsersSchema);
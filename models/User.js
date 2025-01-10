import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:[true,"Email Already Exists"],
        required:[true,"Email is Required"]
    },

    username:{
        type:String,
        required:[true,"Username is Required"]
    },
    image:{
        type:String,
    },
    bookmarks:[
       {type: mongoose.Schema.Types.ObjectId,
       ref:'Property'},
    ]
},{
    timestamps:true,

})


const userModel =  mongoose.model(userSchema)

export default userModel

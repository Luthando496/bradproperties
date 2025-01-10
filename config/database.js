import mongoose from 'mongoose'

let connected = false;

const connectDB = async()=>{
    mongoose.set("strictQuery",true);

    // if database is connected, don't connect again
    if(connected){
        console.log('mongo connected')
        return
    }

    /// connect to DB
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true;
    }catch(error){
        console.log(error)
    }
}


export default connectDB
import mongoose, { Schema } from "mongoose";


const feedbackSchema = new Schema({
    userId:{
        type:String,
        required: true
    },
    text: {
        type:String,
        required: true
    }
    
}, {timestamps: true} )

export default mongoose.model("Feedback", feedbackSchema) 
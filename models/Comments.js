import mongoose, { Schema } from 'mongoose'

const commentsSchema = new Schema({
    userId:{ type: String, required: true },
    bookId: { type: String, required: true },
    comment: { type: String, required: true }
}, {timestamps: true} )

export default mongoose.model("Comments", commentsSchema)
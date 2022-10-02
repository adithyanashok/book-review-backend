import mongoose, { Schema } from 'mongoose'

const booksSchema = new Schema({
    userId: { type: String, required: true },
    bookImg: { type: String },
    bookTitle: { type: String },
    authorName: { type: String },
    rating: { type: Number, default: 0 },
    bookLink: { type: String },
    contentName: { type: String },
    content: { type: String },
    readCount: { type: Number, default: 0 },

}, {timestamps: true} )
export default mongoose.model("Books", booksSchema)
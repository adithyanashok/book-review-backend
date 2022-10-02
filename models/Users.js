import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String },
    isAdmin: { type: Boolean, default: false }
}, {timestamps: true} )

export default mongoose.model("Users", usersSchema)
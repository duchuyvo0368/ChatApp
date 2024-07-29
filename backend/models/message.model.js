import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema(
    {
        message: {
            text: { type: String, required: true }
        },
        user: Array,
        sender: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true

        }
    },
    {
        timestamps: true,
    }
    

);

export default mongoose.model("Messages",MessageSchema)

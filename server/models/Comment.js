import { Schema, model } from "mongoose"
const CommentSchema = new Schema({
    blogID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    likedUsers: {
        type: [String],
        default: []
    },
}, { timestamps: true })

const CommentModel = model("comments", CommentSchema)
export default CommentModel
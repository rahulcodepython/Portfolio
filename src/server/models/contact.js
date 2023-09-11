import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        subject: { type: String, required: true },
        message: { type: String, required: true },
    },
    {
        timestamps: true
    }
)

const Contact = mongoose.models.Contact || mongoose.model("Contact", schema)

export default Contact
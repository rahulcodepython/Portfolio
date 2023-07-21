import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        pricing: { type: String, required: true },
        subject: { type: String, required: true },
        message: { type: String, required: true },
    },
    {
        timestamps: true
    }
)

const Freelance = mongoose.models.Freelance || mongoose.model("Freelance", schema)

export default Freelance
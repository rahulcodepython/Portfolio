import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        category: { type: String, required: true },
        date: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String, required: true },
    }
)

const Repositories = mongoose.models.Repositories || mongoose.model("Repositories", schema)

export default Repositories
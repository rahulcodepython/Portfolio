import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        image: { type: String, required: true },
        category: { type: String, required: true },
        title: { type: String, required: true },
    }
)

const Projects = mongoose.models.Projects || mongoose.model("Projects", schema)

export default Projects
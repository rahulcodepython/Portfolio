import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        technologies: { type: [String], required: true },
        github: { type: String, required: true },
        live: { type: String, required: false },
        category: { type: String, required: true },
        pin: { type: Boolean, default: false },
    }
);

export const Project = models.Project || mongoose.model('Project', userSchema);
import mongoose, { models, Schema } from 'mongoose';


const ResumeSchema: Schema = new Schema({
    resume: { type: String, required: true },
});

export const Resume = models.Resume || mongoose.model('Resume', ResumeSchema);
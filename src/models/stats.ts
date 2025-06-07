import mongoose, { Schema, models } from 'mongoose';

const StatsSchema: Schema = new Schema({
    projects: { type: Number, required: true },
    blogs: { type: Number, required: true },
    message: { type: Number, required: true },
    unreadMessages: { type: Number, required: true },
});

export const Stats = models.Stats || mongoose.model('Stats', StatsSchema);
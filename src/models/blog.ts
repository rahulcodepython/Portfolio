import mongoose, { Schema, models } from 'mongoose';

const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
});

export const Blog = models.Blog || mongoose.model('Blog', BlogSchema);
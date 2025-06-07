import mongoose, { models, Schema } from 'mongoose';


const MessageSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    unread: { type: Boolean, default: true },
});

export const Message = models.Message || mongoose.model('Message', MessageSchema);
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        capability: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export default mongoose.models.user ||
    mongoose.model('user', UserSchema, 'users-nwps');

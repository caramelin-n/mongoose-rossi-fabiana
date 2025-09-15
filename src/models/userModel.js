import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" }
},{
    versionKey: false
});

export const userModel = mongoose.model("User", userSchema);
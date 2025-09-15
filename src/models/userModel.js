import mongoose from "mongoose";
import { profileModel } from "./ProfileModel.js";

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

userSchema.pre("findByIdAndUpdate", { document: true, query: false }, async function (next) {
    const update = this.getUpdate();
    if (update.isDeleted === true){
        const userId = this.getQuery()._id;
        await profileModel.findOneAndUpdate(
            { user: userId },
            { isDeleted: true }
        )
    }
    next();
})

export const userModel = mongoose.model("User", userSchema);
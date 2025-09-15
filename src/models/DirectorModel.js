import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true
    },
    country:{
        type: String
    }
},{
    versionKey: false
});

export const directorModel = mongoose.model("Director", directorSchema);
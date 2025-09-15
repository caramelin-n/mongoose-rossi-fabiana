import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
    releaseDate: {
        type: Date,
        required: true
    },
    genre: {
        type: String,
        enum: ["action", "comedy", "drama", "horror", "sci-fi", "romantic"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},{
    _id: false,
    versionKey: false
})

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    Director: [{ type: mongoose.Schema.Types.ObjectId, ref: "Director" }],
    isDeleted: {
        type: Boolean,
        default: false
    },
    techInfo: techSchema,
},{
    versionKey: false
});

export const movieModel = mongoose.model("Movie", movieSchema);
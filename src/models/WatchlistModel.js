import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    movies: {
        type: mongoose.Schema.Types.ObjectId, ref: "Movies"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

},{
    versionKey: false
});

export const watchlistModel = mongoose.model("Watchlist", watchlistSchema);
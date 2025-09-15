import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default: "https://imgs.search.brave.com/tSQ7qyU11uWI2i0NKNeRN7c7v3Cu6qa3-LE_Sj_9z9E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjA0/MTU3MjM5NS92ZWN0/b3IvYmxhbmstYXZh/dGFyLXBob3RvLXBs/YWNlaG9sZGVyLWlj/b24tdmVjdG9yLWls/bHVzdHJhdGlvbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/d1N1aXUtc2kzM20t/ZWl3R2hYaVhfNUR2/S1FESE5TLS1DQkxj/eXV5NjhuMD0"
    },
    preferences: {
        type: String,
        enum: ["action", "comedy", "drama", "horror", "sci-fi", "romantic"]
    },
    favoriteMovies:
    [{
        type: mongoose.Schema.Types.ObjectId, ref: "Movie"
    }],
    isDeleted: {
        type: Boolean,
        default: false
    }
},{
    versionKey: false
})

export const profileModel = mongoose.model("Profile", profileSchema);
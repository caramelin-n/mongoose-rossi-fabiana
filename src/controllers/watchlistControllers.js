import { watchlistModel } from "../models/WatchlistModel.js";
import { movieModel } from "../models/MovieModel.js";
import { userModel } from "../models/userModel.js";

export const createWatchlist = async (req, res) => {
    try {
        const { userId, movies } = req.body;
        const watch = await watchlistModel.create({
            userId,
            movies
        });
        return res.status(201).json({
            ok: true,
            msg: "Lista creada correctamente",
            data: watch
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const getAllWatchlist = async (req, res) => {
    try {
        const watch = await watchlistModel.find({ isDeleted: false }).populate("Movie").populate("User");
        res.status(200).json({
            ok: true,
            data: watch
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const getWatchlistById = async (req, res) => {
    try {
        const { id } = req.params;
        const watch = await watchlistModel.findById({ _id: id, isDeleted: false }).populate("Movie").populate("User");
        if(!watch){
            return res.status(404).json({
                ok: false,
                msg: "Lista no encontrada."
            });
        }
        res.status(200).json({
            ok: true,
            data: watch
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const updateWatchlist = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, movies } = req.body;
        const watch = await watchlistModel.findOneAndUpdate(
            { _id: id, isDeleted: false },
            { userId, movies},
            { new: true },
        );
        if (!watch){
            return res.status(404).json({
                ok: false,
                msg: "Lista no encontrada.",
            })
        }
        res.status(200).json({
            ok: true,
            msg: "Lista actualizada correctamente.",
            data: watch
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const deleteWatchlist = async (req, res) => {
    try {
        const { id } = req.params;
        const watch = await watchlistModel.findByIdAndUpdate(id, 
            { isDeleted: true },
            { new: true });
        if(!watch){
            return res.status(404).json({
                ok: false,
                msg: "La lista no existe."
            });
        }
        res.status(200).json({
            ok: true,
            msg: "Eliminado correctamente.",
            data: watch
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const addMovieToUser = async (req, res) => {
    try {
        const { userId, movies } = req.body;
        await userModel.findByIdAndUpdate(userId, { $addToSet: { movies: movies } });
        await movieModel.findByIdAndUpdate(movies, { $addToSet: { users: userId } });
        res.status(200).json({
            ok: true,
            msg: "Movie agregada al usuario correctamente",
        })
    } catch (error) {
        
    }
}

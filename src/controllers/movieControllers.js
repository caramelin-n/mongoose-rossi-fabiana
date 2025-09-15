import { movieModel } from "../models/MovieModel.js";
import { directorModel } from "../models/DirectorModel.js";

export const createMovie = async (req, res) => {
    try {
        const { releaseDate, genre, title, description, director, techInfo } = req.body;
        const movie = await movieModel.create({
            releaseDate,
            genre,
            title,
            description,
            director,
            techInfo
        });
        return res.status(201).json({
            ok: true,
            msg: "Película creada correctamente",
            data: movie
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const getAllMovies = async (req, res) => {
    try {
        const movie = await movieModel.find({ isDeleted: false }).populate("Director");
        res.status(200).json({
            ok: true,
            data: movie
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await movieModel.findById({ _id: id, isDeleted: false }).populate("Director");
        if(!movie){
            return res.status(404).json({
                ok: false,
                msg: "Película no encontrada."
            });
        }
        res.status(200).json({
            ok: true,
            data: movie
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { releaseDate, genre, title, description, director, techInfo } = req.body;
        const movie = await movieModel.findOneAndUpdate(
            { _id: id, isDeleted: false },
            { releaseDate, genre, title, description, director, techInfo },
            { new: true },
        );
        if (!movie){
            return res.status(404).json({
                ok: false,
                msg: "Película no encontrada.",
            })
        }
        res.status(200).json({
            ok: true,
            msg: "Película actualizada correctamente.",
            data: movie
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await movieModel.findByIdAndUpdate(id, 
            { isDeleted: true },
            { new: true });
        if(!movie){
            return res.status(404).json({
                ok: false,
                msg: "La película no existe."
            });
        }
        res.status(200).json({
            ok: true,
            msg: "Eliminado correctamente.",
            data: movie
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

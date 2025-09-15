import { profileModel } from "../models/ProfileModel.js";
import { movieModel } from "../models/MovieModel.js";

export const createProfile = async (req, res) => {
    try {
        const { avatar, age, preferences, favoriteMovies } = req.body;
        const profile = await profileModel.create({
            avatar,
            age,
            preferences,
            favoriteMovies
        });
        return res.status(201).json({
            ok: true,
            msg: "Perfil creado correctamente",
            data: profile
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const getAllProfile = async (req, res) => {
    try {
        const profile = await profileModel.find({ isDeleted: false }).populate("Movie");
        res.status(200).json({
            ok: true,
            data: profile
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const getProfileById = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await profileModel.findById({ _id: id, isDeleted: false }).populate("Movie");
        if(!profile){
            return res.status(404).json({
                ok: false,
                msg: "Perfil no encontrado."
            });
        }
        res.status(200).json({
            ok: true,
            data: profile
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const { avatar, age, preferences, favoriteMovies } = req.body;
        const profile = await profileModel.findOneAndUpdate(
            { _id: id, isDeleted: false },
            { avatar, age, preferences, favoriteMovies },
            { new: true },
        );
        if (!profile){
            return res.status(404).json({
                ok: false,
                msg: "Perfil no encontrado.",
            })
        }
        res.status(200).json({
            ok: true,
            msg: "Perfil actualizado correctamente.",
            data: profile
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const deleteProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await profileModel.findByIdAndUpdate(id, 
            { isDeleted: true },
            { new: true });
        if(!profile){
            return res.status(404).json({
                ok: false,
                msg: "El perfil no existe."
            });
        }
        res.status(200).json({
            ok: true,
            msg: "Eliminado correctamente.",
            data: profile
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

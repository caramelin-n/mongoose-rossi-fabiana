import { directorModel } from "../models/DirectorModel.js";

export const createDirector = async (req, res) => {
    try {
        const { name, birthDate, country } = req.body;
        const director = await directorModel.create({
            name,
            birthDate,
            country,
        });
        return res.status(201).json({
            ok: true,
            msg: "Director creado correctamente.",
            data: director
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const getAllDirectors = async (req, res) => {
    try {
        const director = await directorModel.find({ isDeleted: false });
        res.status(200).json({
            ok: true,
            data: director,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const findDirectorById = async (req, res) => {
    try {
        const { id } = req.params;
        const director = await directorModel.findById({ _id: id, isDeleted: false });
        if(!director){
            return res.status(404).json({
                ok: false,
                msg: "Director no encontrado."
            });
        }
        res.status(200).json({
            ok: true,
            data: director
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const updateDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, birthDate, country } = req.body;
        const director = await directorModel.findOneAndUpdate(
            { _id: id, isDeleted: false },
            { name, birthDate, country },
            { new: true },
        );
        if (!director){
            return res.status(404).json({
                ok: false,
                msg: "Director no encontrado.",
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const deleteDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const director = await directorModel.findByIdAndUpdate(id, 
            { isDeleted: true },
            { new: true });
        if(!director){
            return res.status(404).json({
                ok: false,
                msg: "El director no existe."
            });
        }
        res.status(200).json({
            ok: true,
            msg: "Eliminado correctamente.",
            data: director
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

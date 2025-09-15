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
        const director = await directorModel.find();
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
        const director = await directorModel.findById(id, { isDeleted: false, new: true });
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


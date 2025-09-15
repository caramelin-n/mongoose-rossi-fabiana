import { userModel } from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.create({
        username,
        email,
        password,
    });
    res.status(201).json({
        ok: true,
        msg: "Usuario creado correctamente",
        data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
        ok: false,
        msg: "Error interno del servidor",
    });
  }
};

export const getAllUsers = async (req, res) => {
    try {
        const user = await userModel.find({ isDeleted: false });
        res.status(200).json({
            ok: true,
            data: user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findOne({_id: id, isDeleted: false });
        if(!user){
            return res.status(404).json({
                ok: false,
                msg: "Usuario no encontrado."
            });
        }
        res.status(200).json({
            ok: true,
            data: user,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;
        const user = await userModel.findOneAndUpdate(
            { _id: id, isDeleted: false },
            { username, email, password },
            { new: true },
        )
        if (!user){
            return res.status(404).json({
                ok: false,
                msg: "Usuario no encontrado",
            })
        }
        res.status(200).json({
            ok: true,
            msg: "Usuario actualizado correctamente",
            data: user,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndUpdate(id,
            { isDeleted: true },
            { new: true }
        );
        if(!user){
            return res.status(404).json({
                ok: false,
                msg: "Usuario no encontrado."
            });
        }
        res.status(200).json({
            ok: true,
            msg: "Eliminado correctamente.",
            data: user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor",
        });
    }
}
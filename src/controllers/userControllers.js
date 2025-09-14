import { userModel } from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
;    const user = await userModel.create({
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
        const user = await userModel.find();
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

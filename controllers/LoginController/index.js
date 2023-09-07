/*
 *  Controllers Login
 */

import User from "./../../models/User/index.js";
import byscrypt from "bcryptjs";

/**
 *  Login user
 *  @desc Login user
 *  @router POST /api/v1/login
 *  @access public
 **/

export const LoginCtr = async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  let emailLowerCase = email.toLowerCase();

  //TODO: check if password is quait
  if (password !== repeatPassword) {
    res.status(400).send({
      status: "ERROR",
      code: 400,
      message: "Usuario o password no coinciden",
    });
  }

  const userFound = await User.findOne({ email: emailLowerCase });

  if (!userFound) {
    res.status(404).send({
      status: "ERROR",
      code: 404,
      message: "Usuario no registrado",
    });
  } else {
    let isValidPassword = await byscrypt.compareSync(
      password,
      userFound.password
    );

    if (!isValidPassword) {
      res.status(400).send({
        status: "ERROR",
        code: 400,
        message: "email o password incorrectos",
      });
    }

    //TODO: REALIZAMOS EL TOKEN PARA USUARIO LOGEADO

    //Login
    res.status(200).send({
      status: "OK",
      code: 201,
      message: "Usuario loggeado",
      user: userFound,
    });
  }
};

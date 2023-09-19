/*
 *  Controllers Login
 */

import User from "./../../models/User/index.js";
import byscrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { generateToken, getToken } from "./../../utils/index.js";

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
    const token = generateToken(userFound);

    //Login
    res.status(200).send({
      status: "OK",
      code: 201,
      message: "Usuario loggeado",
      user: userFound,
      token,
    });
  }
};

/**
 * @desc Get user profile
 * @router GET /api/v1/profile
 * @access Private
 */

export const getUserProfile = (req, res) => {
  const token = getToken(req);

  //find the user
  //const user = await User.findById(req.userAuthId).populate("orders");
  res.json({
    status: "success",
    message: "User profile fetched successfully",
    token,
  });
};

/*
 *  Controllers User
 */

import User from "./../../models/User/index.js";
import bycript from "bcryptjs";

/**
 *  Register New User
 *  @desc Register user
 *  @router POST /api/v1/users/resgister
 *  @access Private/admin
 **/

export const resgisterUserCrt = async (req, res) => {
  console.log(req.body);
  const { fullname, email, password } = req.body;

  let userLowerCase = email.toLowerCase();

  //TODO: check if exists users
  const isUsersExists = await User.findOne({ userLowerCase });

  if (isUsersExists) {
    res.status(200).send({
      message: "Usuario existe actualmente",
      status: "OK",
      code: 201,
    });
  }

  const salt = await bycript.genSalt(10);
  const hashPassword = await bycript.hash(password, salt);

  const createUser = await User.create({
    fullname,
    email: userLowerCase,
    password: hashPassword,
  });

  res.status(201).send({
    message: "Usuario registrado",
    status: "OK",
    code: 201,
    user: createUser,
  });
};

/*
 *  Controllers User
 */

import User from "./../../models/User/index.js";

/**
 *  Register New User
 *  @desc Register user
 *  @router POST /api/v1/users/resgister
 *  @access Private/admin
 **/

export const resgisterUserCrt = async (req, res) => {
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

  //TODO: hash password

  const createUser = await User.create({
    fullname,
    email: userLowerCase,
    password,
  });

  res.status(201).send({
    message: "Usuario registrado",
    status: "OK",
    code: 201,
    user: createUser,
  });
};

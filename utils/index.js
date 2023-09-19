/**
 * Utils User
 */

import jwt from "jsonwebtoken";

export const OBJ_RESPONSE = {};

/**
 *  Generate Token
 **/
export const generateToken = (params) => {
  console.log(params);
  const { fullname, _id, email } = params;
  return jwt.sign({ fullname, _id, email }, process.env.JWT_TOKEN, {
    expiresIn: "3d",
  });
};

/**
 * obtener token
 **/
export const getToken = (req) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  if (token === undefined) {
    console.log("No hay token");
  } else {
    return token;
  }
};

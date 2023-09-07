/*
 *  Error Handdlers
 */

export const erroPathNotFound = (req, res, next) => {
  const setError = new Error(`${req.originalUrl} no existe`);
  next(setError);
};

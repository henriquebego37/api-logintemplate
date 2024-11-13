/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from "express";
import prismaErrorHandler from "../utils/prismaErrorHandler";

const errorCatcher = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("errorCatcher: ", err.stack);
  if (err instanceof Error) {
    return prismaErrorHandler(err, res);
  }
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message || "Ocorreu um erro no servidor.",
    success: false,
    statusCode,
  });
};

export default errorCatcher;

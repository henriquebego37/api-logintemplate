import express from "express";
import getUsersController from "../controllers/users/getUsersController";
import safeHandler from "../middlewares/safeHandler";
import postUsersController from "../controllers/users/postUsersController";
import errorHandler from "../middlewares/errorHandler";

const rtUsers = express.Router(); // Usando Router ao invés de app diretamente

rtUsers.get(`/users`, safeHandler(getUsersController)); // page=1&pageSize=10&pagination=true
rtUsers.post(`/users/create`, safeHandler(postUsersController));
rtUsers.use(errorHandler);

export default rtUsers;

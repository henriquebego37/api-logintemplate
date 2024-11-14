import express from "express";
import cutHandler from "../middlewares/cutHandler";
import getUsersController from "../controllers/users/getUsersController";
import { postUsersController } from "../controllers/users/postUsersController";
import deleteUsersController from "../controllers/users/deleteUsersController";
const rtUsers = express.Router();
////------------------------------------>
rtUsers.get(`/users`, cutHandler(getUsersController));
rtUsers.post(`/users/create`, cutHandler(postUsersController));
rtUsers.delete(`/users/delete/:idUser`, cutHandler(deleteUsersController));
export default rtUsers;

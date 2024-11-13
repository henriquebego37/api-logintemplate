import express from "express";
import cutHandler from "../middlewares/cutHandler";
import getUsersController from "../controllers/users/getUsersController";
import { postUsersController } from "../controllers/users/postUsersController";
const rtUsers = express.Router();
////------------------------------------>
rtUsers.get(`/users`, cutHandler(getUsersController));
rtUsers.post(`/users/create`, cutHandler(postUsersController));
export default rtUsers;

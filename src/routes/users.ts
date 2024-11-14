import express from "express";
import cutHandler from "../middlewares/cutHandler";
import getUsersController from "../controllers/users/getUsersController";
import { postUsersController } from "../controllers/users/postUsersController";
import deleteUsersController from "../controllers/users/deleteUsersController";
import deleteUserAdvanced from "../controllers/users/avanced/deleteUserAdvanced";
import deleteUserServices from "../controllers/users/avanced/deleteUserServices";
import postUserAdvanced from "../controllers/users/avanced/postUserAdvanced";
import postUserService from "../controllers/users/avanced/postUserService";
const rtUsers = express.Router();
////------------------------------------>
rtUsers.get(`/users`, cutHandler(getUsersController));
rtUsers.post(`/users/create`, cutHandler(postUsersController));
rtUsers.delete(`/users/delete/:idUser`, cutHandler(deleteUsersController));
////------------------------------------>

// advanced
rtUsers.delete(
  `/users/delete/advanced/:idUser`,
  cutHandler(deleteUserAdvanced)
);
rtUsers.post(`/users/create/advanced`, cutHandler(postUserAdvanced));

// services
rtUsers.delete(
  `/users/delete/services/:idUser`,
  cutHandler(deleteUserServices)
);
rtUsers.post(`/users/create/services`, cutHandler(postUserService));

export default rtUsers;

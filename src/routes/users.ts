import express from "express";
import getUsersController from "../controllers/users/getUsersController";
import safeHandler from "../middlewares/safeHandler";
// import deleteUserController from "../controllers/users/deleteUserController";
// import postUserController from "../controllers/users/postUserController";
// import putUserController from "../controllers/users/putUserController";
// import postUsersProfClassTeacher from "../controllers/users/postUsersProfClassTeacher";
//// ------------------------------------------------------------------------------>
const app = express();
//// ------------------------------------------------------------------------------>
const rtUsers = () => {
  //// ------------------------------------------------------------------------------>
  app.get(`/users`, safeHandler(getUsersController)); //page=1&pageSize=10&pagination=true
  //   app.post(`/user/create`, postUserController);
  //   app.post(`/user/professor/assigntoclass`, postUsersProfClassTeacher);
  //   app.put(`/user/change/:id`, putUserController);
  //   app.delete(`/user/delete/:id`, deleteUserController);
  //// ------------------------------------------------------------------------------>
  return app;
  //// ------------------------------------------------------------------------------>
};
//// ------------------------------------------------------------------------------>
export default rtUsers;

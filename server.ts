import cors from "cors";
import express from "express";
import rtUsers from "./src/routes/users";
import authMiddleware from "./src/middlewares/authVerify";
// ------------------------------------------------------------------------------>
export const router = express();
// ------------------------------------------------------------------------------>
const port = process.env.PORT || 3333;
const name = process.env.PROJECT_NAME || "api-template";
const isProd = process.env.NODE_ENV === "production";
// ------------------------------------------------------------------------------>
// Aplicando middleware CORS
router.use(cors());
// ------------------------------------------------------------------------------>
// Middleware para ler JSON do corpo da requisição
router.use(express.json());
// ------------------------------------------------------------------------------>
router.use(authMiddleware);
// ------------------------------------------------------------------------------>
router.use("", rtUsers); // Acesse as rotas de usuário com ""
// ------------------------------------------------------------------------------>
router.listen(port, () => {
  console.log(`🚀 Server ${name} ready at: http://localhost:${port}`);
});

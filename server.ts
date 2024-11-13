import cors from "cors";
import express from "express";
import rtUsers from "./src/routes/users";
// ------------------------------------------------------------------------------>
export const router = express();
// ------------------------------------------------------------------------------>
const port = process.env.PORT || 3333;
const name = process.env.PROJECT_NAME || "api-template";
const isProd = process.env.NODE_ENV === "production";
// ------------------------------------------------------------------------------>
router.use(cors());
// ------------------------------------------------------------------------------>
router.use("", rtUsers);
// ------------------------------------------------------------------------------>

router.listen(port, () => {
  console.log(`🚀 Server ${name} ready at: http://localhost:${port}`);
});

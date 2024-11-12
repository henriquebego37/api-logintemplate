import cors from "cors";
import express from "express";
// ------------------------------------------------------------------------------>
const app = express();
// ------------------------------------------------------------------------------>
const port = process.env.PORT || 3333;
const name = process.env.PROJECT_NAME || "api-template";
const isProd = process.env.NODE_ENV === "production";
// ------------------------------------------------------------------------------>
app.use(cors());
// ------------------------------------------------------------------------------>
app.listen(port, () => {
  console.log(`🚀 Server ${name} ready at: http://localhost:${port}`);
});

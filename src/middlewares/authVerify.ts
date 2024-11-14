import { NextFunction, Request, Response } from "express";

/* comand => 
1º - node
2º - require('crypto').randomBytes(64).toString('hex');
*/

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authKey = req.headers["auth_key"];

  // Verifica se o cabeçalho de autorização está presente e é igual à chave no .env
  if (authKey !== process.env.AUTH_KEY) {
    res.status(401).json({ message: "Não autorizado, camarada!" });
  }

  next(); // Se tudo estiver correto, chama o próximo middleware/rota
};
export default authMiddleware;

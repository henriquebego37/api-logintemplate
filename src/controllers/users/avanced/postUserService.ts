import { Request, Response } from "express";
import { createUserService } from "../../../services/userServices";

const postUserService = async (req: Request, res: Response) => {
  const { cpf, email, login, name, password, phone, token } = req.body;

  try {
    const newUser = await createUserService({
      cpf,
      email,
      login,
      name,
      password,
      phone,
      token,
    });
    res.status(200).json({ message: "Usuário criado com sucesso", newUser });
  } catch (error) {
    throw new Error("Erro interno do servidor" + error);
  }
};

export default postUserService;

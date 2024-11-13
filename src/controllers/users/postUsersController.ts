import { Request, Response } from "express";
import { createUser } from "../../services/userServices";

export const postUsersController = async (req: Request, res: Response) => {
  try {
    // Pegando os dados do usuário do corpo da requisição
    const { name, cpf, email, phone, login, password, token } = req.body;

    // Chamando a função do service para criar o usuário
    const newUser = await createUser({
      name,
      cpf,
      email,
      phone,
      login,
      password,
      token,
    });

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    throw new Error("Error creating user: " + error);
  }
};

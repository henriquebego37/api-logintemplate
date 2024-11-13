// Em src/controllers/users/postUsersController.ts
import { Request, Response } from "express";
import { createUser } from "../../services/userService"; // Importando a função createUser
import { UserData } from "../../services/userService"; // Importando o tipo UserData

const postUsersController = async (req: Request, res: Response) => {
  const { name, email, cpf, login, password, phone }: UserData = req.body;

  try {
    const newUser = await createUser({
      name,
      email,
      cpf,
      login,
      password,
      phone,
    });

    return res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create user" });
  }
};

export default postUsersController;

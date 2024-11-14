import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const postUserAdvanced = async (req: Request, res: Response) => {
  const { cpf, email, login, name, password, phone, token } = req.body;
  //// ------------------------------------------------------------------------------>
  const saltRounds = 10;
  const password_hash = await bcrypt.hashSync(password, saltRounds);
  //// ------------------------------------------------------------------------------>
  try {
    const newUser = await prisma.api_user.create({
      data: {
        cpf,
        email,
        login,
        name,
        password: password_hash,
        phone,
        token,
      },
    });
    //// ------------------------------------------------------------------------------>
    res.status(200).json({ message: newUser });
  } catch (error) {
    throw new Error("Erro interno do servidor" + error);
  }
};

export default postUserAdvanced;

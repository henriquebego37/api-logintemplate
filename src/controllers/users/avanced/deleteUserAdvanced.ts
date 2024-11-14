import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteUserAdvanced = async (req: Request, res: Response) => {
  const { password } = req.body;
  const { idUser } = req.params;

  try {
    const findUser = await prisma.api_user.findUnique({
      where: {
        id: Number(idUser),
      },
    });

    if (!findUser) {
      res.status(500).json({ message: "Usuário não encontrado!" });
    }

    const verifyPassword = await prisma.api_user.findFirst({
      where: {
        id: Number(idUser),
        password: password,
      },
    });

    if (!verifyPassword) {
      res.status(500).json({ message: "Senha do usuário está incorreta" });
    }

    const deleteUser = await prisma.api_user.delete({
      where: {
        id: Number(idUser),
      },
    });

    res.status(200).json({ user: deleteUser });
  } catch (err) {
    throw new Error("Erro interno do servidor");
  }
};

export default deleteUserAdvanced;

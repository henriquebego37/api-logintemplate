import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteUsersController = async (req: Request, res: Response) => {
  const { idUser } = req.params;
  ////---------------------------------------->
  try {
    // --------- existe usuário?
    const existingUser = await prisma.api_user.findUnique({
      where: {
        id: Number(idUser),
      },
    });

    if (!existingUser) {
      return res.status(500).json({ error: "Esse usuário não existe!" });
    }

    // --------- se sim, delete o usuário
    const deleteUser = await prisma.api_user.delete({
      where: {
        id: Number(idUser),
      },
    });

    res
      .status(200)
      .json({ message: "Usuário deletado com sucesso", deleteUser });
  } catch (err) {
    console.error("Erro:", err);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export default deleteUsersController;

import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getUsersController = async (req: Request, res: Response) => {
  try {
    const getUsers = await prisma.api_user.findMany({});

    return res.status(200).json({ Usuários: getUsers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao buscar usuários." });
  }
};

export default getUsersController;

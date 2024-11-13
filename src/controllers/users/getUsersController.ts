import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { getUsers } from "../../services/userServices";

const prisma = new PrismaClient();

const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();

    return res.status(200).json({ Usuários: users });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Não foi possível buscar usuários" });
  }
};

export default getUsersController;

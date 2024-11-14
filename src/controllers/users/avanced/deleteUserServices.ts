import { Request, Response } from "express";
import { deleteUser } from "../../../services/userServices";

const deleteUserServices = async (req: Request, res: Response) => {
  try {
    const { idUser } = req.params;

    const removeUser = await deleteUser(Number(idUser));
    res
      .status(200)
      .json({ message: "Usuário deletado com sucesso", removeUser });
  } catch (error) {
    res.status(500).json({ error: "Não foi possível deletar o usuário" });
  }
};

export default deleteUserServices;

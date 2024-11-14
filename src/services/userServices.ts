import bcrypt from "bcrypt";
// src/services/userServices.ts
import { PrismaClient } from "@prisma/client";
import { NewUser } from "../interfaces";

const prisma = new PrismaClient();

// verifica o id do usuário para saber se existe
export const findUserById = async (idUser: number) => {
  return await prisma.api_user.findUnique({
    where: { id: idUser },
  });
};

export const generateHash = async (password: string) => {
  const saltRounds = 10;
  const password_hash = await bcrypt.hashSync(password, saltRounds);
};

// busca todos os usuários
export const getUsers = async () => {
  try {
    const users = await prisma.api_user.findMany({});
    return users;
  } catch (error) {
    throw new Error("Error fetching users: " + error);
  }
};

// cria novos usuários
export const createUser = async (userData: NewUser) => {
  try {
    const user = await prisma.api_user.create({
      data: userData,
    });
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error);
  }
};

export const createUserService = async (userData: NewUser) => {
  const saltRounds = 10;
  const password_hash = bcrypt.hashSync(userData.password, saltRounds);

  try {
    const newUser = await prisma.api_user.create({
      data: {
        ...userData,
        password: password_hash,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error("Não foi possível criar um usuário" + error);
  }
};

// deleta o usuário de acordo com id.
export const deleteUser = async (idUser: number) => {
  try {
    const findUser = await findUserById(idUser);

    if (!findUser) {
      throw new Error("Usuário não encontrado");
    }

    const deleteUser = await prisma.api_user.delete({
      where: {
        id: idUser,
      },
    });
    return deleteUser;
  } catch (error) {
    throw new Error("Erro ao deletar usuário: " + error);
  }
};

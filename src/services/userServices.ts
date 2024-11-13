// src/services/userServices.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface NewUser {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  login: string;
  password: string;
  token: string;
}

export const getUsers = async () => {
  try {
    const users = await prisma.api_user.findMany({});
    return users;
  } catch (error) {
    throw new Error("Error fetching users: " + error);
  }
};

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

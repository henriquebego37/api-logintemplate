// Em src/services/userService.ts
import { PrismaClient } from "@prisma/client";
import { validateUserData } from "../utils/validations";

const prisma = new PrismaClient();

// Definindo o tipo UserData
export interface UserData {
  name: string;
  email: string;
  cpf: string;
  login: string;
  password: string;
  phone: string;
}

export const createUser = async (data: UserData) => {
  validateUserData(data);

  return prisma.api_user.create({
    data: {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      login: data.login,
      password: data.password,
      phone: data.phone,
    },
  });
};

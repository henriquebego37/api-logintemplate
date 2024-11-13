import { UserData } from "../services/userService";

export const validateUserData = (data: UserData) => {
  const { name, email, cpf, login, password, phone } = data;

  if (!name || !email || !cpf || !login || !password || !phone) {
    throw new Error(
      "All fields are required. Please ensure all fields are provided."
    );
  }
};

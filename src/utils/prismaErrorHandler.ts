// src/utils/prismaErrorHandler.ts
import { Prisma } from "@prisma/client";
import { Response } from "express";

const prismaErrorHandler = (error: any, res: Response) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002": {
        const field = error.meta?.target;
        return res.status(400).json({
          success: false,
          message: `Já existe um registro com esse ${field}.`,
          statusCode: 400,
        });
      }

      case "P2003":
        return res.status(400).json({
          success: false,
          message: "Violação de chave estrangeira.",
          statusCode: 400,
        });

      case "P2011":
        return res.status(400).json({
          success: false,
          message: "Valor nulo não permitido para este campo.",
          statusCode: 400,
        });

      case "P2004":
        return res.status(500).json({
          success: false,
          message: "Erro ao realizar a transação.",
          statusCode: 500,
        });

      case "P2005":
        return res.status(400).json({
          success: false,
          message: "Valor inválido fornecido para um campo.",
          statusCode: 400,
        });

      case "P2006":
        return res.status(400).json({
          success: false,
          message: "Tipo de dado fornecido é incompatível com o esperado.",
          statusCode: 400,
        });

      case "P2007":
        return res.status(400).json({
          success: false,
          message: "Erro de validação de dados.",
          statusCode: 400,
        });

      case "P2025":
        return res.status(404).json({
          success: false,
          message: "Registro não encontrado.",
          statusCode: 404,
        });

      case "P2000":
        return res.status(400).json({
          success: false,
          message: "O valor fornecido é muito longo para este campo.",
          statusCode: 400,
        });

      case "P2016":
        return res.status(500).json({
          success: false,
          message: "Erro de interpretação da query.",
          statusCode: 500,
        });

      default:
        // Se o código não for tratado, retorna um erro genérico
        return res.status(500).json({
          success: false,
          message: "Erro desconhecido no servidor.",
          statusCode: 500,
        });
    }
  }

  // Para outros erros genéricos fora do Prisma
  return res.status(500).json({
    success: false,
    message: error.message || "Ocorreu um erro no servidor.",
    statusCode: 500,
  });
};

export default prismaErrorHandler;

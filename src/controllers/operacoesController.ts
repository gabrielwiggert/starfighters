import { Request, Response } from 'express';
import * as operacoesService from '../services/operacoesService';

export function fazerSoma(req: Request, res: Response) {
  const numero: number = Number(req.params.numero)
  const resultado = operacoesService.novaSoma(numero)
  res.status(200).send({resultado})
}
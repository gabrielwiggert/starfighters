import { Request, Response } from 'express';
import * as rankingService from '../services/rankingService';

export async function getRanking(req: Request, res: Response) {
  const result = await rankingService.getRanking()
  res.status(200).send({result})
}
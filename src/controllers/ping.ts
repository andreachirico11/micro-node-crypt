import { RequestHandler } from 'express';
import { SuccessResponse } from '../types/ApiResponses';
import { log_info } from '../utils/log';

export const getPing: RequestHandler = (req, res) => {
  log_info("ping!!!!!!!!!!!!!!!!!!!!!!!!!")
  return new SuccessResponse(res, "Ping from micro-node-crypt")
};

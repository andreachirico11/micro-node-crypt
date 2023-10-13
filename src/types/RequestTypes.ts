import { Request } from 'express';

export type CryptBody = {input: string, secretKey: string};

export type CryptReq = Request<{}, {}, CryptBody>;
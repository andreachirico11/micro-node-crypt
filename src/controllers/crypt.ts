import { RequestHandler } from 'express';
import { SuccessResponse } from '../types/ApiResponses';
import { log_error, log_info } from '../utils/log';
import { CryptReq } from '../types/RequestTypes';

export const crypt: RequestHandler = ({body: {input, secretKey}}: CryptReq, res) => {
  try {
    log_info('Start crypting String: ' + input + " with secret: " + secretKey);

    let output = 'crypteddddd';

    return new SuccessResponse(res, {
      crypted: output,
    });
  } catch (error) {
    log_error(error, 'Error crypting');

  }
};

export const decrypt: RequestHandler = ({body: {input, secretKey}}: CryptReq, res) => {
  try {
    log_info('Start decrypting String: ' + input + " with secret: " + secretKey);


    let output = 'crypteddddd';

    return new SuccessResponse(res, {
      decrypted: output,
    });
  } catch (error) {
    log_error(error, 'Error decrypting');

  }
};

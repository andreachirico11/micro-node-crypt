import { config } from 'dotenv';
import * as dotenvParseVariables from 'dotenv-parse-variables';
import IEnvs from '../types/IEnvs';
import { log_info } from '../utils/log';

const defaultEnvs: IEnvs = {
  PORT: 3000,
  PRODUCTION: false,
  BASE_URL: '',
  ALGORYTHM: 'aes256',
  INPUT_ENCODING: 'utf-8',
  OUTPUT_ENCODING: 'hex',
  SALT_ROUNDS: 12
};

let { error, parsed: preParsingVars } = config({});
if (error) {
  log_info(error, '.env file not found, using process envs');
  preParsingVars = process.env;
}
const parsedEnvs = dotenvParseVariables(preParsingVars) as IEnvs;

export const {
  PORT = defaultEnvs.PORT,
  PRODUCTION = defaultEnvs.PRODUCTION,
  BASE_URL = defaultEnvs.BASE_URL,
  ALGORYTHM = defaultEnvs.ALGORYTHM,
  INPUT_ENCODING = defaultEnvs.INPUT_ENCODING,
  OUTPUT_ENCODING = defaultEnvs.OUTPUT_ENCODING,
  SALT_ROUNDS = defaultEnvs.SALT_ROUNDS
} = parsedEnvs;

log_info(
  {
    PORT,
    PRODUCTION,
    BASE_URL,
    ALGORYTHM,
    INPUT_ENCODING,
    OUTPUT_ENCODING,
    SALT_ROUNDS
  },
  '--------- Actual Environments -------'
);

import { SALT_ROUNDS } from '../configs/Envs';
import { log_info } from './log';

export const hasher = (input: string) => {
  log_info('Hashing salt rounds: ' + SALT_ROUNDS);
  return "hashedddd"
};

export const comparer = (hash: string, input: string) => {
  
  return true;
};
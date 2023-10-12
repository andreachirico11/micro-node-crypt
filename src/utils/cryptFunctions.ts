import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';
import { CRYPT_ALGORITHMS, DEFAULT_CRYPT_ALGORITHM } from '../configs/Envs';

let test = DEFAULT_CRYPT_ALGORITHM;

const generateIvAndKeyAccordingToAlgo = (algo: string, key: string) => {
  let bytes = 16,
    keyLength = 32;
  switch (algo) {
    case CRYPT_ALGORITHMS.aes56ctr:
      bytes = 16;
      keyLength = 32;
    default:
      break;
  }
  return {
    iv: randomBytes(bytes).toString('hex'),
    key: Buffer.from(randomBytes(keyLength)),
  };
};

const encrypt = (text: string, secretKey: string) => {
    console.log(1, "dec");
  const { iv, key } = generateIvAndKeyAccordingToAlgo(DEFAULT_CRYPT_ALGORITHM, secretKey);
  console.log(2, iv);
  console.log(3, key);

  
  const cipher = createCipheriv(DEFAULT_CRYPT_ALGORITHM, key, iv);
  console.log(4, cipher);
  
  return cipher.update(text, 'utf-8', 'base64') +  cipher.final('base64');
};

const decrypt = (hash: string, secretKey: string) => {
  const { iv, key } = generateIvAndKeyAccordingToAlgo(DEFAULT_CRYPT_ALGORITHM, secretKey);
  const decipher = createDecipheriv(
    DEFAULT_CRYPT_ALGORITHM,
    key,
    iv
  );
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash, 'hex')), decipher.final()]);
  return decrpyted.toString();
};

const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';

const x = encrypt('pippo', secretKey);
console.log(x);

console.log(decrypt('pippo', secretKey));
console.log(decrypt('pippo', secretKey + 'x'));

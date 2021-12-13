import { dirname as dir } from 'path';
import { fileURLToPath } from 'url';

export function dirname () {
  return dir(fileURLToPath(import.meta.url));
}

export default function () {
  return dir(fileURLToPath(import.meta.url));
}
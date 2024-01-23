import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const pathToWrongFilename = path.join(__dirname, 'files', 'wrongFilename.txt');
    const pathToProperFilename = path.join(__dirname, 'files', 'properFilename.md');

    try {

      if (
        !fs.existsSync(pathToWrongFilename) ||
        fs.existsSync(pathToProperFilename)
      ) {
        throw Error('FS operation failed');
      }

      fs.rename(pathToWrongFilename, pathToProperFilename, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('"wrongFilename.txt" was renamed to "properFilename.md"');
      });

    } catch (error) {
      console.log(error);
    }

};

await rename();
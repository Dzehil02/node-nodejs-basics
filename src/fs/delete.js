import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const pathToFileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt')

    try {

      if (!fs.existsSync(pathToFileToRemove)) {
        throw Error('FS operation failed');
      }

      fs.unlink(pathToFileToRemove, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('"fileToRemove.txt" was removed');
      });

    } catch (error) {
      console.log(error);
    }

};

await remove();
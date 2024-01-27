import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const pathToFiles = path.join(__dirname, 'files')

    try {

      if (!fs.existsSync(pathToFiles)) {
        throw Error('FS operation failed');
      }

      fs.readdir(pathToFiles, (err, files) => {
        
        if (err) {
            return console.log(err);
        }

        files.forEach(file => {
          console.log(file);
        });
      });

    } catch (error) {
      console.log(error);
    }
};

await list();
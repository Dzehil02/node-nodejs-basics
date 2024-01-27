import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const pathToFileFresh = path.join(__dirname, 'files', '/fresh.txt');
  const text = 'I am fresh and young';
  
  try {
    
    if (fs.existsSync(pathToFileFresh)) {
      throw Error('FS operation failed');
    }

    fs.writeFile(pathToFileFresh, text, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('Файл записан');
    });

  } catch (error) {
    console.log(error);
  }
  
};

await create();

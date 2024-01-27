import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const pathToFilesFolder = path.join(__dirname, 'files');
    const pathToFilesCopyFolder = path.join(__dirname, 'files_copy');

    try {

      if (
        !fs.existsSync(pathToFilesFolder) ||
        fs.existsSync(pathToFilesCopyFolder)
      ) {
        throw Error('FS operation failed');
      }

      fs.mkdir(pathToFilesCopyFolder, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('folder "files_copy" was created');
      });

      fs.cp(
        pathToFilesFolder,
        pathToFilesCopyFolder,
        { recursive: true },
        (err) => {
          if (err) {
            return console.log(err);
          }
          console.log('files were copied from "files" to "files_copy" folder');
        }
      );
    } catch (error) {
      console.log(error);
    }

};

await copy();

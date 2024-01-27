import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const pathToFileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

    try {

        if (!fs.existsSync(pathToFileToRead)) {
            throw Error('FS operation failed')
        }

        fs.readFile(pathToFileToRead, (err, data) => {
            if (err) {
                return console.log(err);
            }
            console.log(data.toString())
        })
        
    } catch (error) {
        console.log(error)
    }
};

await read();
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const pathToWriteFile = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(pathToWriteFile);

    process.stdin.pipe(writeStream)

    writeStream.on('error', (error) => {
        console.error('Error writing the file:', error);
      });
};

await write();
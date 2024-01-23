import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const pathToReadFile = path.join(__dirname, 'files', 'fileToRead.txt');
    const readSteam = fs.createReadStream(pathToReadFile);
    
    readSteam.on('data', (chunk) => {
        process.stdout.write(chunk)
    });

    readSteam.on('end', () => {
        console.log('\nReading completed.');
    });
    
    readSteam.on('error', (error) => {
        console.error('Error reading the file:', error);
      });
};

await read();
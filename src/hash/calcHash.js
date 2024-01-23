import fs from 'fs';
import { createHash } from 'crypto';
import path, { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const readSteam = fs.createReadStream(pathToFile);
    
    readSteam.on('data', (chunk) => {
        const hash = createHash('sha256').update(chunk).digest('hex');
        console.log(hash)
    })

};

await calculateHash();
import { createGzip } from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const pathToFileTxt = path.join(__dirname, 'files', 'fileToCompress.txt');    
    const pathToFileGz = path.join(__dirname, 'files', 'archive.gz');    
    const gzip = createGzip();
    const readStream = fs.createReadStream(pathToFileTxt);
    const writeStream = fs.createWriteStream(pathToFileGz);

    readStream.pipe(gzip).pipe(writeStream);
    readStream.on('end', () => {
        console.log('File was compressed')
    });
};

await compress();
import {createUnzip} from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const pathToArchive = path.join(__dirname, 'files', 'archive.gz');
    const pathToFileTxt = path.join(__dirname, 'files', 'fileToCompress.txt');  
    const unzip = createUnzip();
    const readStream = fs.createReadStream(pathToArchive);
    const writeStream = fs.createWriteStream(pathToFileTxt);
    
    readStream.pipe(unzip).pipe(writeStream);    
    readStream.on('end', () => {
        console.log('File was decompressed')
    });
};

await decompress();
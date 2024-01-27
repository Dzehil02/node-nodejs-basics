import {spawn} from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const pathToScriptFile = path.join(__dirname, 'files', 'script.js');
    const childProcess = spawn('node', [pathToScriptFile, ...args]);

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`)
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', -5, 77, true]);
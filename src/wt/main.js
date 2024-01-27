import {Worker} from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const countOforkers = os.cpus().length;

    const workers = Array.from({ length: countOforkers }, (_, index) => {
        return new Worker('./src/wt/worker.js', { workerData: index + 10 });
      });
    
      const results = await Promise.all(workers.map((worker) => {
        return new Promise((resolve) => {
          worker.on('message', (message) => {
            resolve(message);
          });
        });
      }));
    
      console.log(results);
};

await performCalculations();
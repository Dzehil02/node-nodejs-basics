const parseArgs = () => {
    const args = process.argv.slice(2)

    for (let index = 0; index < args.length; index+=2) {
        const element = args[index];
        console.log(element + ' is ' + args[index+1])
    }

};

parseArgs();
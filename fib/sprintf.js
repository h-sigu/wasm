var sprintf = (str, ...argv) => !argv.length ? str : 
    sprintf(str = str.replace(sprintf.token||"$", argv.shift()), ...argv);

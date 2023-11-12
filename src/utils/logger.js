import chalk from 'chalk';
import resetPrompt from '../utils/resetPrompt.js';

class Logger {
    #utility;

    constructor(util) {
        this.#utility = util;
    }

    write = (s) => chalk.blue(`    [${this.#utility}] ` + s);
    log = (s) => console.log(chalk.blue(`    [${this.#utility}] ` + s));
    error = (s) => console.log(chalk.magenta(`    [${this.#utility}] ` + s));

    endLog = (s) => {
        this.log(s);
        resetPrompt();
    };
    
    endError = (s) => {
        this.error(s);
        resetPrompt();
    };

    question = (q) => {
        return new Promise((resolve) => {
            rl.question(this.write(q), resolve);
        });
    };
};

export default Logger;
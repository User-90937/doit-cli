import { getCommands } from "./command_registry.js";

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export const rl = readline.createInterface({
    input,
    output,
    prompt: "> "
})

export function startREPL() {
    rl.prompt();
    rl.on('line', async (input) => {
        const parsedCommand = parseCommand(input);
        const command = getCommands()[parsedCommand]
        if (!command) {
            console.log(`Unknown command`)
        } else {
            command.callback();
        }
        rl.prompt();
    })
    
}

function parseCommand(rawCommand: string)  {
    const parsed = rawCommand.split(' ')[0].toLowerCase().trim()
    return parsed;
}
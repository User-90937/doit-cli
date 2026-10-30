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
        const parsedCommand = validateAndParseCommand(input);
        if (parsedCommand) {
            const baseCommand = parsedCommand[0];
            const command = getCommands()[baseCommand];
            await command.callback(parsedCommand[1]);
            if (command.name !== "exit") {
            rl.prompt();
        }
        }
    })
}

function validateAndParseCommand(rawCommand: string): [string, string[]] | undefined  {
    const commands = rawCommand.trim().split(' ')
    const baseCommand = commands[0];
    const args = [...commands.slice(1)]
    if (!getCommands()[baseCommand]) {
        console.log("Unkown command!\nUse the 'help' command to see all valid commands.")
        rl.prompt()
    } else {
        return [baseCommand, args]
    }
}
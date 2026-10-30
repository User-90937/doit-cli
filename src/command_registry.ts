import { createCommand } from "./commands/commandCreate.js"
import { helpCommand } from "./commands/help.js";
import { exitCommand } from "./commands/commandExit.js";

export type CLICommand = {
  name: string;
  description: string;
  args: string[];
  options: string[];
  callback: (args: string[]) => Promise<void>;
};

export function getCommands(): Record<string, CLICommand> {
    return {
    create: {
        name: "create",
        description: "Used to create a new task.",
        args: ["-o", "--options", "-p", "--priority"],
        options: ["-p, --priority [h|m|l]  Set priority level: high, medium, or low", "-t, --track Tracks git commits and auto completes task."],
        callback: createCommand,
    },
    help: {
        name: "help",
        description: "Displays All Possible Commands",
        args: [],
        options: [],
        callback: helpCommand
    },
    exit: {
        name: "exit",
        description: "Exits the todoit-cli",
        args: [],
        options: [],
        callback: exitCommand
    }
}
}
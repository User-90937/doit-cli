import { createCommand } from "./commands/commandCreate.js"
import { helpCommand } from "./commands/help.js";
import { exitCommand } from "./commands/commandExit.js";

export type CLICommand = {
  name: string;
  description: string;
  options: string[];
  callback: () => void;
};

export function getCommands(): Record<string, CLICommand> {
    return {
    create: {
        name: "create",
        description: "Used to create a new task.",
        options: ["-p, --priority [h|m|l]  Set priority level: high, medium, or low", "-t, --track Tracks git commits and auto completes task."],
        callback: createCommand,
    },
    help: {
        name: "help",
        description: "Displays All Possible Commands",
        options: [],
        callback: helpCommand
    },
    exit: {
        name: "exit",
        description: "Exits the todoit-cli",
        options: [],
        callback: exitCommand
    }
}
}
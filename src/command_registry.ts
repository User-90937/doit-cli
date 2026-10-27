import { createTask } from "./commands/createTask.js"
import { getPrio } from "./commands/priority.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: () => void;
};

export function getCommands(): Record<string, CLICommand> {
    return {
    create: {
        name: "create",
        description: "Used to create a new task.",
        callback: createTask,
    }
}
}
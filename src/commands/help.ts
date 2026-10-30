import { get } from "node:http";
import { getCommands } from "../command_registry.js";

export async function helpCommand() {
    const commands = getCommands();
    console.log("\nCommands:\n")
    
     for (const command of Object.values(commands) ) {
        console.log(`Command: ${command.name}`);
        console.log(`Description: ${command.description}\n`);
     }
     console.log("Enter command name followed by (-o, or --options) to see all options for that command.")
}
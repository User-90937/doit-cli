import { askQuestion } from "../helpers/io_helper.js";
import { createCommandArgHelper } from "./createHelper.js";

const tasks = new Map<string, string>();

export async function createCommand(args: string[]) {
    createCommandArgHelper(args);
}
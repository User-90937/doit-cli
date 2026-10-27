import { askQuestion } from "../helpers/io_helper.js";

const tasks = new Map<string, string>();

export async function createTask() {
    console.log("Enter Task Description")
    const currentTask = await askQuestion("Enter task description")
    const taskPriority = await askQuestion("Enter the tasks priority (h = high, m = medium, l = low)")
    tasks.set(currentTask, taskPriority)
}
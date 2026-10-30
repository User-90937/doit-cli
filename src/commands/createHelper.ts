import { tasks } from "../state.js";

const PRIORITY_LEVELS = ["h", "m", "l"]

export function createCommandArgHelper(args: string[]) {
    const priorityArgElement = args.indexOf("-p") !== -1 ? args.indexOf("-p") : args.indexOf("--priority");
    console.log(priorityArgElement)
    let priorityLevel = null;
    let description = "asdasdasdad";
    if (priorityArgElement !== -1) {
        priorityLevel = args[priorityArgElement + 1];
        if (!PRIORITY_LEVELS.includes(priorityLevel)) {
            throw new Error(`Invalid priority level: ${priorityLevel}`)
        }
        description = args.slice(priorityArgElement + 2).join(' ')
    }
    tasks.push({
        description,
        priority: priorityLevel ?? "high",
        isComplete: false
    })
    console.log("task created")
    for (const task of tasks) {
        console.log(task.description)
        console.log(task.priority)
        console.log(task.isComplete)
    }
}
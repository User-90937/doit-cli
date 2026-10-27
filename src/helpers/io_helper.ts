import { rl } from "../repl.js"

export async function askQuestion(question: string): Promise<string> {
    return await rl.question(question)
}
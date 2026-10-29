import { rl } from "../repl.js"

export async function exitCommand() {
    console.log("Exiting todoit-cli, You Better Have Done it!")
    await rl.close()
}
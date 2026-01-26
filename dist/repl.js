import { createInterface } from "node:readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
export function cleanInput(text) {
    return text
        .toLowerCase() // Zamiana na małe litery (np. "Pikachu" -> "pikachu")
        .trim() // Usunięcie spacji z początku i końca
        .split(/\s+/); // Rozbicie na tablicę według spacji (obsługuje też wiele spacji)
}
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        // can add more commands here
    };
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    const commands = getCommands();
    rl.prompt();
    rl.on("line", (input) => {
        const words = cleanInput(input);
        const command = words[0];
        const handler = commands[command];
        if (handler) {
            try {
                handler.callback(commands);
                rl.prompt();
            }
            catch (err) {
                console.error(err);
            }
        }
        else {
            console.log("Unknown command");
            rl.prompt();
        }
        /*if (input.length === 0) {
          rl.prompt();
        } else if (input==="exit"){
          commandExit(getCommands());
        } else if (input==="help"){
          commandHelp(getCommands());
          rl.prompt();
        }
        else {
          console.log("Unknown command");
          rl.prompt();
        }*/
    });
}

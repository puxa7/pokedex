import { createInterface } from "node:readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import type { CLICommand } from "./command.js";

export function cleanInput(text: string): string[] {
  return text
    .toLowerCase()         
    .trim()                
    .split(/\s+/);         
}

export function getCommands(): Record<string, CLICommand> {
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

  rl.on("line", (input: string) => {
    const words = cleanInput(input);
    const command = words[0];

    const handler = commands[command];

    if (handler){
      try {
        handler.callback(commands);
        rl.prompt();

      } catch (err){
        console.error(err);
      }
    }else {
        console.log("Unknown command");
        rl.prompt();
    }


  });


}
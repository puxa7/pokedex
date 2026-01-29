import { createInterface, type Interface } from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export type CLICommand = {
  name: string;
  description: string;
  //callback: (commands: Record<string, CLICommand>) => void;
  callback: (state: State) => void;
};

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>
};

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

export function initState(): State{
    const commands = getCommands();

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
      });

      return {rl, commands};
}


import type { State } from "./state.js";

export function cleanInput(text: string): string[] {
  return text
    .toLowerCase()
    .trim()
    .split(/\s+/);
}

export function startREPL(state: State) {
  state.rl.prompt();

  state.rl.on("line", (input: string) => {
    const words = cleanInput(input);
    const command = words[0];

    const handler = state.commands[command];

    if (handler) {
      try {
        //handler.callback(commands);
        handler.callback(state);
        state.rl.prompt();

      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Unknown command");
      state.rl.prompt();
    }

  });
}
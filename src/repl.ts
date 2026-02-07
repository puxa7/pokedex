import type { State } from "./state.js";

export function cleanInput(text: string) {
    return text.toLowerCase().trim().split(/\s+/);
}


export async function startREPL(state: State) {
  state.rl.prompt();

  state.rl.on("line", async (input: string) => {
    const words = cleanInput(input);
    const command = words[0];
    const args = words.slice(1);

    const handler = state.commands[command];

    if (handler) {
      try {
        await handler.callback(state, ...args);
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
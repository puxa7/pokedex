export function cleanInput(text) {
    return text.toLowerCase().trim().split(/\s+/);
}
export async function startREPL(state) {
    state.rl.prompt();
    state.rl.on("line", async (input) => {
        const words = cleanInput(input);
        const command = words[0];
        const handler = state.commands[command];
        if (handler) {
            try {
                await handler.callback(state);
                state.rl.prompt();
            }
            catch (err) {
                console.error(err);
            }
        }
        else {
            console.log("Unknown command");
            state.rl.prompt();
        }
    });
}

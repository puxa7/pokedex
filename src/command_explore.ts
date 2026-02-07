import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {

    const locationName = args[0];

    if (!locationName) {
        console.log("You must provide a location area name.");
        state.rl.prompt();
        return;
    }

    const location = await state.pokeapi.fetchLocation(locationName);

    console.log(`Exploring ${locationName}...`);
    console.log("Found Pokemon:");

    for (const obiekt of location.pokemon_encounters) {
        console.log(` - ${obiekt.pokemon.name}`);
    }
}
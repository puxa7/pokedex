import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {

    let data;

    if (state.nextLocationsURL === null) {
        data = await state.pokeapi.fetchLocations(); // first page
    } else {
        data = await state.pokeapi.fetchLocations(state.nextLocationsURL); // next page
    }

    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;

    for (const location of data.results) {
        console.log(location.name);
    }

    state.rl.prompt();
}
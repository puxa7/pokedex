import type { State } from "./state.js";

export async function commandExplore(state: State): Promise<void> {
    /*if (state.prevLocationsURL === null) {
        console.log("you're on the first page");
    } else {
        const data = await state.pokeapi.fetchLocations(state.prevLocationsURL);
        state.nextLocationsURL = data.next;
        state.prevLocationsURL = data.previous;
        for (const loc of data.results) console.log(loc.name);
    }*/
   
    state.rl.prompt();
}
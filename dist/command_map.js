export async function commandMap(state) {
    let data;
    if (state.nextLocationsURL === null) {
        data = await state.pokeapi.fetchLocations(); // pierwsza strona
    }
    else {
        data = await state.pokeapi.fetchLocations(state.nextLocationsURL); // następna strona
    }
    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;
    for (const location of data.results) {
        console.log(location.name);
    }
    state.rl.prompt();
}

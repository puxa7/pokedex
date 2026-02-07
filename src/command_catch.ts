import { match } from "node:assert";
import type { State } from "./state.js";


export async function commandCatch(state: State, ...args: string[]): Promise<void> {

    /*const locationName = args[0];

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
    }*/

    
    const pokemonName = args[0];

    if (!pokemonName) {
        console.log("You must provide a pokemon name.");
        state.rl.prompt();
        return;
    }
    //1
    console.log(`Throwing a Pokeball at ${pokemonName}...`)

    //2
    const pokemon = await state.pokeapi.fetchPokemon(pokemonName);
    //console.log(pokemon.base_experience);
    
    

    if (pokemon.base_experience > Math.random()*200) {
        console.log(`${pokemonName} escaped!`)
    } else {
        console.log(`${pokemonName} was caught!`)
        state.pokedex[pokemon.name]=pokemon;
    }

}